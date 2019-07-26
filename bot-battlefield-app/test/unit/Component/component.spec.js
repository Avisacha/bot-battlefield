import { assert, expect } from 'chai';
import { beforeEach } from 'mocha';
import { Component } from '../../../src/component/component';

describe('Component', () => {
    let component = null;
    const tagName = "tagName";
    const template = "<h1>template</h1>";

    let component2 = null;
    const tagName2 = "tagName2";
    const template2 = "<h1>template2</h1>";

    before(() => {
        window.document.body.appendChild(
            window.document.createElement(tagName)
        );
    });

    after(() => {
        window.document.body.removeChild(
            window.document.querySelector(tagName)
        )
    });

    beforeEach(() => {
        component = new Component(
            tagName,
            template
        );
    });

    const errorPhrase = 'don\'t exists in "Component"';

    describe('display()', () => {
        it('should insert "template" in "tagName"', () => {
            component.display();
            const element = window.document.querySelector(tagName);
            assert.equal(element.innerHTML, template, `"template" ${errorPhrase}`);
        });

        it('should invoke "display()" of "components" elements', () => {
            component2 = new Component(
                tagName2,
                template2
            );
            component.components.push(component2);

            window.document.querySelector(tagName).appendChild(
                window.document.createElement(tagName2)
            );

            component2.display();
            const element2 = window.document.querySelector(tagName2);
            assert.equal(element2.innerHTML, template2, `"template2" ${errorPhrase}`);
        });
    });


    describe('components()', () => {
        it('should contain only instances of "Component"', () => {
            expect(() => component.components.push(true), "ReferenceError is not throw")
            .to.throw(
                Error,
                'Element components must be an instance of "Component" at index 0'
                );
        });
    });

});
