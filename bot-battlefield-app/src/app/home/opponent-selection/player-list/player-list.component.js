import { Component } from "../../../../component/component";
import { PlayerService } from "../../../../shared/services/player.service";
import { PlayerLocalStorageService } from "../../../../shared/services/player-local-storage.service";
import html from "./player-list.component.html";

export class PlayerListComponent extends Component {
    constructor() {
        super(
            `player-list`,
            html);
    }

    display() {
        super.display();
        // window.componentHandler.upgradeDom();

        this.playersBinder();

        document.addEventListener(
            "click",
            () => this.selectionSystem()
        );
    }

    playersBinder() {
        PlayerService.read()
            .then((data) => {
                let i = 0;
                for (const player of data.players) {
                    // PlayerLocalStorageService.read()
                    //     .catch((data) => {
                    // if (player.name !== data.name) {
                    //     i++;
                    //     this.addRow(player.name, i);
                    // }
                    // })
                    // .catch((error) => console.log(error));

                    if (player.name !== data.name) {
                        i++;
                        this.addRow(player.name, i);
                    }
                };
            })
            .catch((error) => console.log(error));
    }

    selectionSystem() {
        this.selectedElement = event.target.parentElement;

        console.log(this.selectedElement);

        if (this.selectedElement.nodeName !== "TR") {
            console.log("not a TR");
            return;
        }

        if (selectedElement.parentElement.nodeName === "THEAD") {
            console.log("is a THEAD");
            return;
        }

        if (this.selectedElement.className == "selected") {
            this.selectedElement.classList.remove("selected");
            this.selectedElement.style.backgroundColor = "white";
            return;
        }

        let selected = document.getElementsByClassName("selected")[0];

        if (selected) {
            selected.classList.remove("selected");
            selected.style.backgroundColor = "white";
        }

        this.selectedElement.className = "selected";
        this.selectedElement.style.backgroundColor = "#65a6ff";
    }

    addRow(name, i) {
        const tBodyElement = window.document.querySelector("table tbody");
        const trElement = window.document.createElement("tr");
        const tdElement = window.document.createElement("td");
        const textNode = window.document.createTextNode(name);

        trElement.className = `player_${i}`;
        tdElement.className = `mdl-data-table__cell--non-numeric`;

        tBodyElement.appendChild(trElement);
        trElement.appendChild(tdElement);
        tdElement.appendChild(textNode);

    }

}