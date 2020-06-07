import fecther from "./fetcher";

const api = {
    async sendGameData(fromData) {
        try {
            const data = await fecther.post(`/game`,fromData);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getAllPlayers() {
        try {
            const data = await fecther.get(`/player/all`,);
            return data.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async uploadImages(fromData) {
        try {
            const data = await fecther.post(`/upload`,fromData);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getImages(gameId) {
        try {
            const data = await fecther.get(`/game/images?gameid=${gameId}`);
            return data.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async sendPlayerScore(gameId,playersScore) {
        try {
            const data = await fecther.post(`/game/playerscore?gameid=${gameId}`,playersScore);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async addUser(user) {
        try {
            const data = await fecther.post(`/player`,user);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getAllMatches() {
        try {
            const data = await fecther.get(`/game/all`);
            return data.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getBestPlayers() {
        try {
            const data = await fecther.get(`/player/best`);
            return data.data;
        }
        catch (error) {
            console.log(error);
        }
    },


};

export default api;