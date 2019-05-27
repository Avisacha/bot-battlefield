import { Component } from "../component";
import { HomeComponent } from "./home/home.component";
import { Login } from "./login/login.component";
import { Game } from "./game/game.component";

export class AppComponent extends Component {

    constructor() {
        super(
            `app`,
            `<p>truc</p>`,
            `p{color: red}`
        );

        homeComponent = new HomeComponent();
        login = new Login();
        game = new Game();

    }

}
