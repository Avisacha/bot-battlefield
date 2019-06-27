import { MenuComponent } from "./menu/menu.component";
import { OpponentSelectionComponent } from "./opponent-selection/opponent-selection.component";
import { AppComponent } from "../app.component";
import { Component } from "../../component/component";
import html from "./home.component.html";
import { Router } from "../../route/router";
import { PlayerLocalStorageService } from "../../shared/services/player-local-storage.service";

export class HomeComponent extends Component {
    constructor() {
        super(
            `home`,
            html,
        );
        this.menuComponent = new MenuComponent();
        this.opponentSelectionComponent = new OpponentSelectionComponent();
        this.components.push(this.menuComponent);
        this.components.push(this.opponentSelectionComponent);
    }

    display() {
        PlayerLocalStorageService.read()
            .then((data) => {
                if (null === data) {
                    Router.navigate("/login");
                    return;
                }
                super.display();

            })
            .catch((error) => {
                console.log(error);
                super.display();
            });
    }

    event() {
        Router.navigate("/login");
    }

}
