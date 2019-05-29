import { Route } from "./route";

const routes = [];

export class Router {   
    static addRoute(url, component, params) {
        routes.push(new Route(url, component, params));
        return Router;
    }

    static navigate(url, parameters) {
        
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
