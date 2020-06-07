import axios from 'axios';

const fecther = axios.create({
    baseURL: 'https://tactical.herokuapp.com/api',
    withCredentials: true,
});

export default fecther;