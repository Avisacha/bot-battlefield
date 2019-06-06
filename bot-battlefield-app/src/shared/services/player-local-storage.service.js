const key = "player";

export class PlayerLocalStorageService {
    constructor() {
        this.response;
    }

    static create(playerJson) {
        return new Promise((resolve, reject) => {
            //console.log(player);

            // if (typeof(playerJSon) !== "object") {
            //     reject("type is not an object");
            //     return;
            // }
            // if (document.localStorage.getItem(key)) {
            //     reject("player already exist");
            //     return;
            // }

            this.playerStringifyied = JSON.stringify(playerJson.players[playerJson.players.length - 1]);
            window.localStorage.setItem(key, this.playerStringifyied);
            resolve();
        });

    }

    static read() {
        return new Promise((resolve, reject) => {
            if (typeof ("player") !== "string") {
                reject("type is not a string");
            }
            this.response = window.localStorage.getItem("player");
            resolve(this.response);
        });
    }

}
