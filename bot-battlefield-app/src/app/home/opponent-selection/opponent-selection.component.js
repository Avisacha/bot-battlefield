import { PlayerListComponent } from "./player-list/player-list.component";
import { Component } from "../../../component/component";
import html from "./opponent-selection.component.html";
import { DialogComponent } from "../../shared/dialog.component";
import { Opponent } from "./../../../shared/model/opponent.model";
import { PlayerSocketService } from "../../../shared/services/player-socket.service";
import { Router } from "../../../route/router";

export class OpponentSelectionComponent extends Component {

    constructor() {
        super(
            `opponent`,
            html,
            ``
        );

        this.dialog = new DialogComponent();
        this.playerListComponent = new PlayerListComponent(this.onPlay, this.onOpponent);
        this.components.push(this.playerListComponent);
    }

    onPlay(playerTwo) {
        const opponent = new Opponent;
        opponent.playerOne = this.playerLocal;
        opponent.playerTwo = playerTwo;

        PlayerSocketService.send(opponent);

        this.dialog.show();
        this.dialog.setTitle("Waiting the opponent...");
        this.dialog.setButton("Cancel");

        this.dialog.addEvent("Cancel", () => {
            opponent.playerOne = null;
            PlayerSocketService.send(opponent);
            this.dialog.close();
        })
    }

    onOpponent(opponent) {
        console.log(opponent);
        if (null === opponent.playerOne || null === opponent.playerTwo) {
            this.dialog.close();
            this.dialog.show();
            this.dialog.setTitle(`Opponent cancel the game`);
            this.dialog.removeSpinner();

            this.dialog.setButton("Cancel");
        }
        else if (null === opponent.game) {
            this.dialog.show();
            this.dialog.setTitle(`${opponent.playerOne.name} invite you`);
            this.dialog.removeSpinner();

            this.dialog.setButton("Accept");
            this.dialog.addEvent("Accept", () => {
                PlayerSocketService.send(opponent);
                this.dialog.close();
                Router.navigate("/game");
            });

            this.dialog.setButton("Cancel");
            this.dialog.addEvent("Cancel", () => {
                opponent.playerTwo = null;
                PlayerSocketService.send(opponent);
                this.dialog.close();
            });
        }
        else if (null !== opponent.game) {
            // PlayerSocketService.send(opponent);
            Router.navigate("/game");
        }
    }

}