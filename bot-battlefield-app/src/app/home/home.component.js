import { MenuComponent } from "./menu/menu.component";
import { OpponentSelectionComponent } from "./opponent-selection/opponent-selection.component";
import { AppComponent } from "../app.component";
import { Component } from "../../component";
import html from "./home.component.html";

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

}
