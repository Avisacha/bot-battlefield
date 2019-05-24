export class Component {
    
    constructor(balise, html, scss){
        this.html = html;
        this.scss = scss;
        this.balise = balise;
    }

    display() {
        const element = window.document.querySelector(this.balise);
        element.innerHTML = this.html;
    }

}
 