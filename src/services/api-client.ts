import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'d15721712731446f82c3022bcaa2b713'
    }
})