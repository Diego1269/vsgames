import axios from "axios";

const privApi = axios.create({
    baseURL: "https://vsgamesapi-production.up.railway.app/api/v1/privilegios/"
});

export const getPrivs = () => privApi.get('/');