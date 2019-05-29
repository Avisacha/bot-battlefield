import { Component } from "../component";
import { HomeComponent } from "./home/home.component";
import html from './app.component.html';
import { LoginComponent } from "./login/login.component";
import { Router } from "../route/router";

export class AppComponent extends Component {

    constructor() {
        super(
            `app`,
            html,);
        Router.add("/login", new LoginComponent())
        Router.add("/home", new HomeComponent())
    }
    display() {
        super.display();
        Router.navigate("/login");
    }
}
