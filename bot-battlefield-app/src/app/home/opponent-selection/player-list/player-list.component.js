import { Component } from "../../../../component";
import html from './player-list.component.html';

export class PlayerListComponent extends Component{
    constructor () {
        super(   
        `player-list`,
        html,
        `p{color: red}`
        );
    }
}