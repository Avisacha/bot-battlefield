import {MenuComponent} from "./menu/menu.component";
import {OpponentSelection} from "./opponent-selection/opponent-selection.component";

export class HomeComponent {
    constructor(){
        super();

        menuComponent = new MenuComponent();
        opponentSelection = new OpponentSelection();
    }
}
