import axios from "axios";
import { urlApi } from "../constants/url";

const api = axios.create({
    baseURL: urlApi,
});

export default api;