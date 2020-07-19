import axios from 'axios';

const fecther = axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: 'https://tactical.herokuapp.com/api',
    withCredentials: true,
});

export default fecther;