import { jsonbin } from "../../../../resources/jsonbin";

export class PlayerService {
    constructor() {

    }

    create() {
        return new Promise((resolve, reject) => {
            // resolve();
            // reject();
        });
    }

    static read() {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (4 !== req.readyState) {
                    return;
                }

                if (200 !== req.status) {
                    reject(req.status);
                    return;
                }

                const data = JSON.parse(req.response);
                //console.log(data);
                resolve(data);
            }

            req.open("GET", `${jsonbin.url}${jsonbin.bins.players}`);
            req.setRequestHeader("secret-key", jsonbin.key);
            req.send();
        });
    }

    update() {
        return new Promise((resolve, reject) => {
            
        });
    }

    delete() {
        return new Promise((resolve, reject) => {
            
        });
    }

}
