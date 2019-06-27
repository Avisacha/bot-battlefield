const key = "player";

export class PlayerLocalStorageService {
    constructor() {
        this.response;
    }

    static create(playerJson) {
        return new Promise((resolve, reject) => {
            try{
                this.playerStringifyied = JSON.stringify(playerJson);
                window.localStorage.setItem(key, this.playerStringifyied);
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
                this.response = window.localStorage.getItem("player");
                resolve(this.response);
            }
            catch(error){
                reject(error);

            }
        });
    }

}
