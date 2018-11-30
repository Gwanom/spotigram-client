import axios from 'axios';
import {environment} from "./Environment";

const SpotigramClient = axios.create({
    baseURL: environment.spotigramURL,
    headers:{
        "Content-Type": "application/json",
    },
    withCredentials: true
});
export default SpotigramClient;
