const key = "player";

export class PlayerLocalStorageService {
    constructor() {

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
            console.log(JSON.stringify(playerJson[playerJson.length - 1]));

            window.localStorage.setItem(key, JSON.stringify(playerJson[playerJson.length - 1]));
            resolve();
        });

    }

    static read(player) {
        return new Promise((resolve, reject) => {
            if (typeof (player) !== "string") {
                reject("type is not a string");
            }
            response = window.localStorage.getItem(player);
            resolve(response);
        });
    }

}
