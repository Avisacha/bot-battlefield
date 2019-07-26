import { Component } from "../../../../component/component";
import { PlayerLocalStorageService } from "../../../../shared/services/player-local-storage.service";
import { DialogComponent } from "../../../shared/dialog.component";
import { PlayerSocketService } from "../../../../shared/services/player-socket.service";
import { html } from "./player-list.component.html";

export class PlayerListComponent extends Component {
    constructor(onPlay, onOpponent) {
        super(
            `player-list`,
            html
        );
        this.dialog = new DialogComponent();
        this.components.push(this.dialog);
        this.playerLocal;
        this.onPlay = onPlay;
        this.onOpponent = onOpponent;
    }

    display() {
        super.display();
        this.dialog.show();
        this.dialog.setTitle("Loading players");

        PlayerLocalStorageService.read()
            .then((playerLocal) => {
                this.playerLocal = playerLocal;
                this.dialog.close();
                PlayerSocketService.onListen((playerSocket) => {
                    if (playerSocket.opponent) {
                        this.onOpponent(playerSocket.opponent);
                    }
                    else {
                        this.updateList(playerSocket);
                    }
                })
                    .then(() => PlayerSocketService.send(playerLocal))
                    .catch((error) => this.onError(error))
            })
            .catch((error) => this.onError(error));
    }

    onError(error) {
        this.dialog.setTitle(`On Read Error ${error}`);
        this.dialog.removeSpinner();
        this.dialog.setButton();
    }

    selectionSystem(trElement, playerTwo) {
        const button = window.document.querySelector("button");

        if (trElement.className.endsWith("selected")) {
            trElement.classList.remove("selected");
            trElement.removeAttribute("style");
            button.setAttribute("disabled", "disabled");
            button.onclick = null;
            return;
        }

        const selected = document.getElementsByClassName("selected")[0];

        if (selected) {
            selected.classList.remove("selected");
            selected.removeAttribute("style");
        }

        trElement.className += " selected";
        trElement.style.backgroundColor = "#65a6ff";
        button.removeAttribute("disabled");
        button.onclick = () => {
            this.onPlay(playerTwo);
        }
    }

    updateList(playerSocket) {
        for (const player of playerSocket.players) {
            if (this.playerLocal.id !== player.id) {
                const found = PlayerSocketService.getPlayers().find((value) => {
                    return player.id === value.id;
                });
                if (!found) {
                    this.addItemList(player);
                }
            }
        }

        for (const player of PlayerSocketService.getPlayers()) {
            if (this.playerLocal.id !== player.id) {
                const found = playerSocket.players.find((value) => {
                    return player.id === value.id;
                });
                if (!found) {
                    this.removeItemList(player);
                }
            }
        }
    }

    addItemList(player) {
        const tBodyElement = window.document.querySelector("table tbody");
        const trElement = window.document.createElement("tr");
        const tdElement = window.document.createElement("td");
        const textNode = window.document.createTextNode(player.name);

        trElement.addEventListener(
            "click",
            () => this.selectionSystem(trElement, player)
        );

        trElement.className = "player-" + player.id;
        tdElement.className = `mdl-data-table__cell--non-numeric`;

        tBodyElement.appendChild(trElement);
        trElement.appendChild(tdElement);
        tdElement.appendChild(textNode);
    }

    removeItemList(player) {
        const trElement = window.document.querySelector('.player-' + player.id);

        trElement.parentNode.removeChild(trElement);
    }

}
