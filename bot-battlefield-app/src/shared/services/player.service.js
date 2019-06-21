// import { jsonbin } from "../../../../resources/jsonbin";
import { webapi } from "../../../../resources/webapi";
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
            // console.log(response);
            req.onreadystatechange = () => {
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

            req.open("POST", `${webapi.url}/create_player/${name}`);
            // req.setRequestHeader("secret-key", jsonbin.key);
            // req.setRequestHeader("versioning", "false");
            // req.setRequestHeader("Content-type", "application/json");
            req.send(dataToSend);
        });
    }

    static existingVerify(name) {
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

                resolve(req.status);
            }

            req.open("GET", `${webapi.url}/players_verification/${name}`, true);
            req.send();
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

                const jsonResponse = JSON.parse(req.response);

                for (const player in jsonResponse) {
                    let playerModel = new PlayerModel();
                    // playerModel.id = jsonResponse[player].id;
                    playerModel.name = jsonResponse[player].name;
                    // playerModel.token = jsonResponse[player].token;
                    // playerModel.ready = jsonResponse[player].ready;
                    response.players.push(playerModel);
                }

                resolve(response);
            }

            req.open("GET", `${webapi.url}/players`, true);
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
