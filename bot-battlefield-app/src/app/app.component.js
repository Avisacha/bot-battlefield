import { Component } from "../component/component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { GameComponent } from "./game/game.component";
import html from "./app.component.html";
import { Router } from "../route/router";

export class AppComponent extends Component {

    constructor() {
        super(`app`, html);

        Router
            .addRoute("/login", new LoginComponent)
            .addRoute("/home", new HomeComponent)
            .addRoute("/game", new GameComponent);
    }

    display() {
        super.display();
        Router.navigate("/home");
    }

}
