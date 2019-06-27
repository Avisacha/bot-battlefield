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
            this.nickname.focus();
            return;
        }
        this.dialogComponent.show();
        this.dialogComponent.dialogSetTitle("Creating account");
        PlayerService.create(this.nickname.value)
            .then((player) => this.onCreateLoad(player))
            .catch((error) => this.onError(error));

    }

    onCreateLoad(player) {
        this.dialogComponent.closeDialog();
        PlayerLocalStorageService.create(player)
            .then(() => Router.navigate("/home"))
            .catch((error) => this.onError(error))
    }
    
    onError(error) {
        this.dialogComponent.dialogSetTitle(error);
        this.dialogComponent.dialogRemoveSpinner();
        this.dialogComponent.dialogSetCloseButton();
    }

}
