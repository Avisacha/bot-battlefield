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
        // this.dialog;

        this.dialogComponent = new DialogComponent();

        this.components.push(this.dialogComponent);
    }

    display() {
        super.display();
        this.nickname = window.document.querySelector("login #nickname");
        // this.dialog = document.querySelector('login dialog');
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

    // dialogDisplay() {
    //     dialogPolyfill.registerDialog(this.dialog);
    //     this.dialog.showModal();
    // }

    // onError(text) {
    //     const elementTitle = window.document.querySelector("dialog h3");
    //     elementTitle.firstChild.nodeValue = text;

    //     const node = window.document.querySelector("dialog .mdl-grid");
    //     node.parentNode.removeChild(node);

    //     const dialogElement = window.document.querySelector("dialog");
    //     const divElement = window.document.createElement("div");
    //     divElement.className = "mdl-dialog__actions";
    //     const formElement = window.document.createElement("form");
    //     formElement.method = "dialog";
    //     const buttonElement = window.document.createElement("button");
    //     buttonElement.type = "submit";
    //     buttonElement.className = "mdl-button";
    //     const textNode = window.document.createTextNode("Close");

    //     dialogElement.appendChild(divElement);
    //     divElement.appendChild(formElement);
    //     formElement.appendChild(buttonElement);
    //     buttonElement.appendChild(textNode);
    // }

    onStart() {
        const regexObj = new window.RegExp(this.regex);
        if (!regexObj.test(nickname.value)) {
            alert("nickname incorrect");
            this.nickname.focus();
            return;
        }
        // this.dialogComponent.display();
        this.dialogComponent.show();
        // this.dialogDisplay();
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
                // this.dialogComponent.onError("nickname existant");
                // this.onError("nickname existant");
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
        // this.dialogComponent.onError(`On Read Error ${error}`);
        // this.onError(`On Read Error ${error}`);

        console.log(error);
    }

    onCreateLoad(player) {
        PlayerLocalStorageService.create(player)
            .then(() => Router.navigate("/home", nickname.value))
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
        // this.dialogComponent.onError(`On Create Error ${error}`);
        // this.onError(`On Create Error ${error}`);

        console.log(error);
    }

}
