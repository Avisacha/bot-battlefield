import { Component } from "../../../../component/component";
import { PlayerService } from "../../../../shared/services/player.service";
import { PlayerLocalStorageService } from "../../../../shared/services/player-local-storage.service";
import html from "./player-list.component.html";
import { DialogComponent } from "../../../shared/dialog.component";


export class PlayerListComponent extends Component {
    constructor() {
        super(
            `player-list`,
            html);

        this.dialog = new DialogComponent();
        this.components.push(this.dialog);
    }

    display() {
        super.display();

        this.dialog.show();
        this.dialog.dialogSetTitle("Loading players");

        PlayerService.read()
            .then((data) => this.addPlayer(data))
            .catch((error) => this.onReadError(error));

        document.addEventListener(
            "click",
            () => this.selectionSystem()
        );

        window.document.querySelector(".ePlay").addEventListener(
            "click",
            () => this.onPlay()
        );
    }

    onReadError(error) {
        this.dialog.dialogSetTitle(`On Read Error ${error}`);
        this.dialog.dialogRemoveSpinner();
        this.dialog.dialogSetCloseButton();
    }

    onPlay() {
        console.log(document.getElementsByClassName("selected")[0].firstChild.textContent);
    }

    addPlayer(playersData) {
        this.dialog.closeDialog();
        let i = 0;
        for (const player of playersData.players) {
            // PlayerLocalStorageService.read()
            //     .catch((playersData) => {
            // if (player.name !== playersData.name) {
            //     i++;
            //     this.addRow(player.name, i);
            // }
            // })
            // .catch((error) => console.log(error));

            if (player.name !== playersData.name) {
                i++;
                this.addRow(player.name, i);
            }
        };
    }

    selectionSystem() {
        // EventTarget.prototype.addEventListener = () => {}
        this.selectedElement = event.target.parentElement;

        if (this.selectedElement.nodeName !== "TR") {
            // console.log("Not a TR element");
            return;
        }

        if (this.selectedElement.parentElement.nodeName === "THEAD") {
            console.log("Is a THEAD element");
            return;
        }


        if (this.selectedElement.className.endsWith("selected")) {
            this.selectedElement.classList.remove("selected");
            this.selectedElement.removeAttribute("style");

            // console.log("1");

            return;
        }

        let selected = document.getElementsByClassName("selected")[0];
        // console.log(selected);

        if (selected) {
            selected.classList.remove("selected");
            selected.removeAttribute("style");

            // console.log("2");
        }

        this.selectedElement.className += " selected";
        this.selectedElement.style.backgroundColor = "#65a6ff";

        // console.log("3");
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