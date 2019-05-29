import {MenuComponent} from "./menu/menu.component";
import { OpponentSelectionComponent} from "./opponent-selection/opponent-selection.component";
import { Component } from "../../component";
import html from './home.component.html';
import { Router } from "../../route/router";

export class HomeComponent extends  Component{
    constructor(){
        super(
            `home`,
            html,
            `p{color: red}`
        );
        this.components.push(
             new MenuComponent(),
             new OpponentSelectionComponent(),
        );
    }
    display() {
        super.display();
        const myBtn = window.document.querySelector("home .eLogin");
        myBtn.addEventListener("click", () => Router.navigate("/login"));
    }

    monClick() {
        console.log("click");
        console.log(this);
    }
}
