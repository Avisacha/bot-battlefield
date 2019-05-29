import html from "./login.component.html";
import { Component } from "../../component/component";
import { Router } from "../../route/router";

export class LoginComponent extends Component {
    constructor() {
        super(`login`, html);
    }

    display() {
        super.display();
        window.document.querySelector(".eStart").addEventListener(
            "click",
            () => this.event()
        );

        window.componentHandler.upgradeDom();
    }

    event() {
        // const nickName = window.document.getElementById("nickName").value;
        var nickname = window.document.querySelector("#nickname");
        if (nickname.value) {
            alert(nickname.value);
            Router.navigate("/home", nickname.value);
            return;
        }

        // nickname.parentNode.MaterialTextfield.change("coucou");
        // alert("No nickname enter");
        console.log(nickname.parentNode.MaterialTextfield.checkDirty());
        //document.getElementById('.error-span').style.display = 'block';
    }
}
