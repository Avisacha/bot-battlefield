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
        this.dialog = document.querySelector('login dialog');
        dialogPolyfill.registerDialog(this.dialog);
    }

    show() {
        this.display();
        this.dialog.showModal();
    }

    dialogSetTitle(text) {
        const elementTitle = window.document.querySelector("dialog h3");
        elementTitle.firstChild.nodeValue = text;
    }

    dialogRemoveSpinner() {
        const spinner = window.document.querySelector("dialog .mdl-grid");
        spinner.parentNode.removeChild(spinner);
    }

    dialogSetCloseButton() {
        const dialogElement = window.document.querySelector("dialog");
        const divElement = window.document.createElement("div");
        divElement.className = "mdl-dialog__actions";
        const formElement = window.document.createElement("form");
        formElement.method = "dialog";
        const buttonElement = window.document.createElement("button");
        buttonElement.type = "submit";
        buttonElement.className = "mdl-button";
        const textNode = window.document.createTextNode("Close");
        
        dialogElement.appendChild(divElement);
        divElement.appendChild(formElement);
        formElement.appendChild(buttonElement);
        buttonElement.appendChild(textNode);
    }

    // onError(text) {
        // const elementTitle = window.document.querySelector("dialog h3");
        // elementTitle.firstChild.nodeValue = text;
        
        // const node = window.document.querySelector("dialog .mdl-grid");
        // node.parentNode.removeChild(node);

        // const dialogElement = window.document.querySelector("dialog");
        // const divElement = window.document.createElement("div");
        // divElement.className = "mdl-dialog__actions";
        // const formElement = window.document.createElement("form");
        // formElement.method = "dialog";
        // const buttonElement = window.document.createElement("button");
        // buttonElement.type = "submit";
        // buttonElement.className = "mdl-button";
        // const textNode = window.document.createTextNode("Close");
        
        // dialogElement.appendChild(divElement);
        // divElement.appendChild(formElement);
        // formElement.appendChild(buttonElement);
        // buttonElement.appendChild(textNode);
    // }

}
