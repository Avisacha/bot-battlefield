import { assert, expect } from 'chai';
import { Router } from '../../../src/route/router';
import { Component } from '../../../src/component/component';
import { afterEach } from 'mocha';

afterEach(() => {
    Router.get().splice(0);
})

describe('Router', () => {
    describe('addRoute()', () => {
        it('should add an element to "routes"', () => {
            const routesLength = Router.get().length;
            Router.addRoute("/url", new Component("tagName", "template"));
            assert.equal(routesLength + 1, Router.get().length);
        });
    });

    describe('routes', () => {
        it('should contain instance of  "routes"', () => {
            expect(() => Router.get().push(true), "ReferenceError is not throw")
                .to.throw(
                    TypeError,
                    'Element of "routes" must be an instance of "Route" at index 0'
                );
        });
    });

});
