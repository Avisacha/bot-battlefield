import { Component } from "../component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { GameComponent } from "./game/game.component";
import html from "./app.component.html";

export class AppComponent extends Component {

    constructor() {
        super(
            `app`,
            html,
            `p{color: red}`
        );

        this.homeComponent = new HomeComponent();
        this.loginComponent = new LoginComponent();
        this.gameComponent = new GameComponent();

        this.components.push(this.homeComponent);

    }

}
