import {PlayerListComponent} from "./player-list/player-list.component";
import { Component } from "../../../component";
import html from './opponent-selection.component.html';

export class OpponentSelectionComponent extends Component{
    constructor () {
        super(   
        `opponent-selection`,
        html,
        `p{color: red}`
        );

        this.components.push(
            new PlayerListComponent(),
        )
    }
}