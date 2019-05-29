export class Component {
    
    constructor(balise, html, scss){
        this.html = html;
        this.scss = scss;
        this.balise = balise;
        this.components = [];
    }

    display() {
        const element = window.document.querySelector(this.balise);
        element.innerHTML = this.html;
        for (let component of this.components) {
            component.display();
        }
    }

}
