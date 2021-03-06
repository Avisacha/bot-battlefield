import { Component } from "../../component/component";
import html from "./dialog.component.html";
import dialogPolyfill from 'dialog-polyfill';

export class DialogComponent extends Component {
    constructor() {
        super(`shared-dialog`, html);

        this.dialog;
    }

    display() {
        super.display();
        this.dialog = document.querySelector('dialog');
        dialogPolyfill.registerDialog(this.dialog);
    }

    show() {
        this.display();
        this.dialog.showModal();
    }

    setTitle(text) {
        const elementTitle = window.document.querySelector("dialog h3");
        
        elementTitle.firstChild.nodeValue = text;
    }

    removeSpinner() {
        const spinner = window.document.querySelector("dialog .mdl-grid");
        spinner.parentNode.removeChild(spinner);
    }

    setButton(text) {
        const dialogElement = window.document.querySelector("dialog");
        const divElement = window.document.createElement("div");
        divElement.className = "mdl-dialog__actions";
        const formElement = window.document.createElement("form");
        formElement.method = "dialog";
        const buttonElement = window.document.createElement("button");
        buttonElement.type = "submit";
        buttonElement.className = "mdl-button " + text;
        const textNode = window.document.createTextNode(text || "Close");
        
        dialogElement.appendChild(divElement);
        divElement.appendChild(formElement);
        formElement.appendChild(buttonElement);
        buttonElement.appendChild(textNode);
    }

    addEvent(text, func) {
        const dialogElement = window.document.querySelector("dialog");
        const Element = window.document.querySelector(".mdl-dialog__actions ." + text);
        const form = window.document.querySelector("form");
        dialogElement.appendChild(form);
        form.appendChild(Element);
        
        Element.onclick = func;
    }

    close() {
        const dialogElement = window.document.querySelector("dialog");
        dialogElement.parentNode.removeChild(dialogElement);
    }

}
