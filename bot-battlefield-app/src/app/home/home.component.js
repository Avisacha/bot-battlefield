import { MenuComponent } from "./menu/menu.component";
import { OpponentSelectionComponent }
    from "./opponent-selection/opponent-selection.component";
import { AppComponent } from "../app.component";
import { Component } from "../../component";
import html from "./home.component.html";
import { Router } from "../../route/router";

export class HomeComponent extends Component {
    constructor() {
        super(
            `home`,
            html,
            ``
        );

        this.menuComponent = new MenuComponent();
        this.opponentSelectionComponent = new OpponentSelectionComponent();

        this.components.push(this.menuComponent);
        this.components.push(this.opponentSelectionComponent);

    }

    display() {
        super.display();
        window.document.querySelector(".eHome").addEventListener(
            "click",
            () => this.event()
        );
    }

    event() {
        Router.navigate("/login");
    }

}

// console.log(this);
// this.components = [];
// this.components.push(this.loginComponent);
