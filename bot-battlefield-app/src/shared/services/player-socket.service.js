import { WsBotBattlefield } from "../../../../resources/ws.bot-battlefield"

let players = [];

let server;

export class PlayerSocketService {
    constructor() {

    }

    static onListen(callback) {
        return new Promise((resolve, reject) => {
            server = new WebSocket(`${WsBotBattlefield.url}${WsBotBattlefield.endpoints.players}`);
            server.onopen = () => {
                resolve(server);
            };
            server.onclose = (e) => {
            };
            server.onmessage = (e) => {
                const data = JSON.parse(e.data);
                callback(data);
                if (data.players) {
                    return players = data.players;
                }
            };
            server.onerror = (e) => {
                reject(e);
            };
        });
    }

    static send(data) {
        server.send(JSON.stringify(data));
    }

    static getPlayers() {
        return players;
    }

}
