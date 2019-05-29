import { Component } from "../../../../component/component";
import html from "./player-list.component.html";

export class PlayerListComponent extends Component {
    constructor() {
        super(
            `playerList`,
            html,
            ``);
    }
}