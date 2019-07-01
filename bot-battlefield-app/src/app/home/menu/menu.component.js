import { Component } from "../../../component/component";
import html from "./menu.component.html";
import { PlayerLocalStorageService } from "../../../shared/services/player-local-storage.service";

export class MenuComponent extends Component {
    constructor() {
        super(
            `menu-component`,
            html);
        }

        display()
        {
            super.display();

            PlayerLocalStorageService.read()
            .then((player) => {
                const headerRow = window.document.querySelector(".headerRow");
                const h4 =  window.document.createElement("h4");
                
                const textNode = window.document.createTextNode(player.name);
                headerRow.appendChild(h4);
                h4.appendChild(textNode);
            })
            .catch(() => {});

        }
}