import { Route } from "./route";

const routes = [];

routes.push = function () {
    if (!(arguments[0] instanceof Route)) {
        throw new TypeError(`Element of "routes" must be an instance of "Route" at index ${routes.length}`);
    }
    return Array.prototype.push.apply(this, arguments);
}

export class Router {
    static get() {
        return routes;
    }

    static addRoute(url, component) {
        routes.push(new Route(url, component));
        return Router;
    }

    static navigate(url) {
        for (let route of routes) {
            if (route.url === url) {
                const element = window.document.querySelector("router");

                if (element.firstChild) {
                    element.removeChild(element.firstChild);
                }

                const elementBalise = window.document.createElement(route.component.balise);
                element.appendChild(elementBalise);
                route.component.display();

                return true;
            }
        }
        return false;
    }

}
