export class Component {
    constructor(tagName, template) {
        this.template = template;
        this.tagName = tagName;
        
        this.components = [];
        this.components.push = (elements) => {
            if (!(elements instanceof Component)) {
                throw new Error(`Element components must be an instance of "Component" at index ${this.components.length}`);
            }
            return Array.prototype.push.apply(this.components, elements);
        }
    }

    display() {
        const element = window.document.querySelector(this.tagName);
        element.innerHTML = this.template;

        for (const component of this.components) {
            component.display();
        }
    }

}
