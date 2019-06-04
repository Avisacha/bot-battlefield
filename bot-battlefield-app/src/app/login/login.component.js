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
        this.nickname = window.document.querySelector("#nickname");
        nickname.pattern = this.regex;
        window.componentHandler.upgradeDom();
    }

    onStart() {
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
        console.log(data.players);
        for (const player of data.players) {
            if (player.name === this.nickname.value) {
                alert("nickname existant");
                return;
            }
        }
        // //alert(data.players);
        PlayerService.create(this.nickname.value)
            .then((data) => this.onCreateLoad(data))
            .catch((error) => this.onCreateError(error));
    }

    onReadError(error) {
        alert("onReadError");
        console.log(error);

    }

    onCreateLoad(error) {
        alert("onCreateLoad ", error);

        Router.navigate("/home", nickname.value);
    }

    onCreateError(error) {
        alert("onCreateError ", error);
    }

}
