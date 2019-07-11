import axios from 'axios';

const KEY = "AIzaSyBNFILZXyV_Zsd7q0bmNyHm1d3uCasE-5k";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
