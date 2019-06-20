import { jsonbin } from "../../../../resources/jsonbin";
import { PlayerModel } from "../model/player.model";

const response = {
    players: []
};

export class PlayerService {
    constructor() {
    }

    static create(name) {
        const playerModel = new PlayerModel();
        playerModel.name = name;
        response.players.push(playerModel);
        return new Promise((resolve, reject) => {
            const dataToSend = JSON.stringify(response);

            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                console.log(req.status);
                if (4 !== req.readyState) {
                    return;
                }

                if (200 !== req.status) {
                    response.players.pop();
                    reject(req.status);
                    return;
                }
                resolve(response);
            }

            req.open("PUT", `${jsonbin.url}${jsonbin.bins.players}`);
            req.setRequestHeader("secret-key", jsonbin.key);
            req.setRequestHeader("versioning", "false");
            req.setRequestHeader("Content-type", "application/json");
            req.send(dataToSend);
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
                for (const player of JSON.parse(req.response).players) {
                    let playerModel = new PlayerModel();
                    playerModel.id = player.id;
                    playerModel.name = player.name;
                    playerModel.token = player.token;
                    playerModel.ready = player.ready;
                    response.players.push(playerModel);
                }
                // response = JSON.parse(req.response);
                resolve(response);
            }

            
            req.open("GET", `http://localhost:8000/players`);
            // req.open("GET", `${jsonbin.url}${jsonbin.bins.players}${jsonbin.version}`);
            // req.setRequestHeader("secret-key", jsonbin.key);
            req.send();
        });
    }

    static update(data) {
        return new Promise((resolve, reject) => {
        });
    }

    static delete() {
        return new Promise((resolve, reject) => {

        });
    }

}
