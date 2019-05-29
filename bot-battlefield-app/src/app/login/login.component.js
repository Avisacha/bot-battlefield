import { Component } from "../../component";
import html from './login.component.html';
import { Router } from "../../route/router";

export class LoginComponent extends Component {
    constructor() {
        super(
            "login",
            html,
        );
    }
    display() {
        super.display();
        window.document.querySelector("login .eHome")
            .addEventListener("click", () => Router.navigate("/home"));
    }

    monClick() {
        console.log("click");
        console.log(this);
    }
}