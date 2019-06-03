import html from "./login.component.html";
import { Component } from "../../component/component";
import { Router } from "../../route/router";
import { PlayerService } from "../../shared/services/player.service";

export class LoginComponent extends Component {
    constructor() {
        super(`login`, html);
        this.regex = "^[a-z@-Z\d\xC0-\xFF_\-]{3,16}$";
        this.nickname;
    }

    display() {
        super.display();
        window.document.querySelector(".eStart").addEventListener(
            "click",
            () => this.event()
        );
        this.nickname = window.document.querySelector("#nickname");
        nickname.pattern = this.regex;
        window.componentHandler.upgradeDom();
    }

    event() {
        const regexObj = new window.RegExp(this.regex);
        if (!regexObj.test(nickname.value)) {
            alert("nickname incorrect");
            this.nickname.focus();
            return;
        }
        PlayerService.read()
            .then((data) => this.onReadLoad(data))
            .catch((error) => this.onReadError(error));
    }

    onReadLoad(data) {
        for (value in data.players) {
            if (value === this.nickname) {
                alert("nickname existant");
                return;
            }
        }
        alert(data.players);
        PlayerService.create()
            .then((data) => this.onCreateLoad(data))
            .catch((error) => this.onCreateError(error));
    }

    onReadError(error) {
        alert("Error ", error);
    }

    onCreateLoad() {
        Router.navigate("/home", nickname.value);
    }

    onCreateError() {

    }

}
