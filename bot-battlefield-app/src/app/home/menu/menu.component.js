import { Component } from "../../../component";

export class MenuComponent extends Component {
    constructor() {
        super(
            `menu`,
            `<p>Hello menu</p>`,
            `p{color: red}`);
    }
}