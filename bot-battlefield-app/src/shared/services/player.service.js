// import { jsonbin } from "../../../../resources/jsonbin";
import { apiBotBattlefield } from "../../../../resources/api.bot-battlefield";
import { PlayerLocalStorageService } from "./player-local-storage.service";

export class PlayerService {
    constructor() {
    }

    static create(name) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (4 !== xhr.readyState) {
                    return;
                }
                if (201 !== xhr.status) {
                    return reject("Player already exist");
                }
                const player = JSON.parse(xhr.response).player;
                resolve(player);
            }

            xhr.open("POST", `${apiBotBattlefield.url}${apiBotBattlefield.endpoints.players}`);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(`name=${window.encodeURI(name)}`);
        });
    }

    static read(player) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (4 !== xhr.readyState) {
                    return;
                }

                if (200 !== xhr.status) {
                    reject("Can not process entity");
                    return;
                }

                resolve(JSON.parse(xhr.response));
            }

            const token = player.token;
            const id = player.id;

            xhr.open("GET", `${apiBotBattlefield.url}${apiBotBattlefield.endpoints.players}`);
            xhr.setRequestHeader("Authorization", `Basic ${window.btoa(`${id}:${token}`)}`);
            xhr.setRequestHeader('Cache-Control', 'no-cache');
            xhr.send();
        });
    }

}
