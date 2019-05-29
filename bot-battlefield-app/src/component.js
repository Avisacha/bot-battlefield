export class Component {

    constructor(balise, html, scss) {
        this.html = html;
        this.scss = scss;
        this.balise = balise;

        this.components = [];
    }

    display() {

        const element = window.document.querySelector(this.balise);
        element.innerHTML = this.html;

        for (const iterator of this.components) {
            iterator.display();
        }

    }

}
