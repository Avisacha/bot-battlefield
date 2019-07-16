const key = "player";

export class PlayerLocalStorageService {
    constructor() {
        
    }

    static create(playerJson) {
        return new Promise((resolve, reject) => {
            try{
                const playerStringifyied = JSON.stringify(playerJson);
                window.localStorage.setItem(key, playerStringifyied);
                resolve();

            }
            catch(error){
                reject(error);
            }
        });

    }

    static read() {
        return new Promise((resolve, reject) => {
            try {
                const response = window.localStorage.getItem("player");
                resolve(JSON.parse(response));
            }
            catch(error){
                reject(error);
            }
        });
    }

}
