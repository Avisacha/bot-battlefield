import html from "./login.component.html";
import { Component } from "../../component";
import { Router } from "../../route/router";

export class LoginComponent extends Component{
    constructor () {
        super(`login`, html);
    }

    display() {
        super.display();
        window.document.querySelector(".eLogin").addEventListener(
            "click",
            () => this.event()
        );
    }

    event() {
        Router.navigate("/home");
    }
}