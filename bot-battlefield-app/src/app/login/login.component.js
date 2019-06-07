import html from "./login.component.html";
import { Component } from "../../component/component";
import { Router } from "../../route/router";
import { PlayerService } from "../../shared/services/player.service";
import { PlayerLocalStorageService } from "../../shared/services/player-local-storage.service";
import { DialogComponent } from "../shared/dialog.component";


export class LoginComponent extends Component {
    constructor() {
        super(`login`, html);
        this.regex = "^[a-z@-Z\d\xC0-\xFF_\-]{3,16}$";
        this.nickname;

        this.dialogComponent = new DialogComponent();
        this.components.push(this.dialogComponent);
    }

    display() {
        super.display();
        this.nickname = window.document.querySelector("login #nickname");
        nickname.pattern = this.regex;
        window.componentHandler.upgradeDom();

        window.document.querySelector(".eStart").addEventListener(
            "click",
            () => this.onStart()
        );
        window.document.querySelector("#nickname").addEventListener(
            "keypress",
            (e) => {
                var key = e.which || e.keyCode;
                if (key === 13) {
                    this.onStart();
                }
            }
        );
    }

    onStart() {
        const regexObj = new window.RegExp(this.regex);
        if (!regexObj.test(nickname.value)) {
            alert("nickname incorrect");
            this.nickname.focus();
            return;
        }
        // console.log("coucou");
        
        this.dialogComponent.show();
        this.dialogComponent.dialogSetTitle("Creating account");
        PlayerService.read()
            .then((data) => this.onReadLoad(data))
            .catch((error) => this.onReadError(error));
    }

    onReadLoad(data) {
        for (const player of data.players) {
            if (player.name === this.nickname.value) {
                this.dialogComponent.dialogSetTitle(`Nickname existant`);
                this.dialogComponent.dialogRemoveSpinner();
                this.dialogComponent.dialogSetCloseButton();
                return;
            }
        }
        PlayerService.create(this.nickname.value)
            .then((data) => this.onCreateLoad(data))
            .catch((error) => this.onCreateError(error));
    }

    onReadError(error) {
        this.dialogComponent.dialogSetTitle(`On Read Error ${error}`);
        this.dialogComponent.dialogRemoveSpinner();
        this.dialogComponent.dialogSetCloseButton();

        console.log(error);
    }

    onCreateLoad(player) {
        PlayerLocalStorageService.create(player)
            .then(() => {
                this.dialogComponent.closeDialog();
                Router.navigate("/home", nickname.value)
            })
            .catch((error) => {
                this.dialogComponent.dialogSetTitle(error);
                this.dialogComponent.dialogRemoveSpinner();
                this.dialogComponent.dialogSetCloseButton();
            });
    }

    onCreateError(error) {
        this.dialogComponent.dialogSetTitle(`On Create Error ${error}`);
        this.dialogComponent.dialogRemoveSpinner();
        this.dialogComponent.dialogSetCloseButton();

        console.log(error);
    }

}
