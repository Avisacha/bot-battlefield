import { Component } from "../../../../component/component";
import { PlayerService } from "../../../../shared/services/player.service";
import { PlayerLocalStorageService } from "../../../../shared/services/player-local-storage.service";
import { DialogComponent } from "../../../shared/dialog.component";
import { WsBotBattlefield } from "../../../../../../resources/ws.bot-battlefield";
import { PlayerSocketService } from "../../../../shared/services/player-socket.service";
import { html } from "./player-list.component.html";
import { Opponent } from "./../../../../shared/model/opponent.model";


export class PlayerListComponent extends Component {
    constructor() {
        super(
            `player-list`,
            html
        );
        this.dialog = new DialogComponent();
        this.components.push(this.dialog);
        this.playerLocal;
    }

    display() {
        super.display();
        this.dialog.show();
        this.dialog.dialogSetTitle("Loading players");

        PlayerLocalStorageService.read()
            .then((playerLocal) => {
                this.playerLocal = playerLocal;
                this.dialog.closeDialog();
                PlayerSocketService.onListen((playerSocket) => this.updateList(playerLocal, playerSocket))
                    .then(() => PlayerSocketService.send(playerLocal))
                    .catch((error) => this.onError(error))
            })
            .catch((error) => this.onError(error));
    }

    onError(error) {
        this.dialog.dialogSetTitle(`On Read Error ${error}`);
        this.dialog.dialogRemoveSpinner();
        this.dialog.dialogSetCloseButton();
    }

    selectionSystem(trElement, playerTwo) {
        const button = window.document.querySelector("button");

        // unselect
        if (trElement.className.endsWith("selected")) {
            trElement.classList.remove("selected");
            trElement.removeAttribute("style");
            button.setAttribute("disabled", "disabled");
            button.onclick = null;
            return;
        }

        const selected = document.getElementsByClassName("selected")[0];

        // switch select
        if (selected) {
            selected.classList.remove("selected");
            selected.removeAttribute("style");
        }

        // select
        trElement.className += " selected";
        trElement.style.backgroundColor = "#65a6ff";
        button.removeAttribute("disabled");
        button.onclick = () => {
            this.onPlay(playerTwo);
        }
    }

    onPlay(playerTwo) {
        const opponent = new Opponent;
        opponent.playerOne = this.playerLocal;
        opponent.playerTwo = playerTwo;

        console.log(opponent);

        PlayerSocketService.send(opponent);

        this.dialog.show();
        this.dialog.dialogSetTitle("Hello");
        this.dialog.dialogRemoveSpinner();
        this.dialog.dialogSetCloseButton("Cancel");
    }

    updateList(playerLocalStorage, playerSocket) {
        // if (playerSocket) {
        //     this.removeItemList(playerSocket.player.id);
        //     return;
        // }

        // console.log(playerSocket.players);


        // console.log(PlayerSocketService.getPlayers());
        // console.log(playerSocket.players);

        // console.log("server");
        // console.log(playerSocket.players);
        // console.log("service");
        // console.log(PlayerSocketService.getPlayers());

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



        // this.addItemList(playerSocket.players[playerSocket.players.length - 1]);


        // for (const player of playerSocket.players) {

        // }

        // for (const player of playerSocket.players) {
        //     if (player.id !== playerLocalStorage.id
        //         && !PlayerSocketService.getPlayers().find(
        //             (value) => value.id === player.id)) {
        //         this.addItemList(player);
        //     }
        // }
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
