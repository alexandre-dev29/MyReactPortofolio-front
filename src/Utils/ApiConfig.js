/**
 * this file export default configuation for api call]
 * and headers set
 */
import axios from "axios";
const all_env  = process.env;


const baseUrl = all_env.REACT_APP_API_URL;
const api_key = all_env.REACT_APP_API_KEY;

export const ApiCall = axios.create({
    baseURL: baseUrl,
    headers: {
        api_key:api_key
    }
});

