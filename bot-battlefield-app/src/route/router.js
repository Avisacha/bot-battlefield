import {Route} from "./route"

const routes = [];

export class Router {
    constructor() {
    }
    static add(url, component, params){
        routes.push(new Route(url, component, params))
        return Router;
    }
    static navigate(url, parameters) {
        for (let route of routes){
            if (route.url === url) {
                window.document.querySelector("router")
                .innerHTML = `<${route.component.balise}></${route.component.balise}>`;
                route.component.display();
                return true;
            }
        }
        return false;
    }
}