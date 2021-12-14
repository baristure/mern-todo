import axios from 'axios';
import { apiBaseUrl } from "./apiconfig";

const todoApi = {
    add: async (todo) => {
        const response = await axios
            .post(`${apiBaseUrl}/api/v1/todo/add`, { content: todo })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response;
            });
        return response;
    },
    get: async () => {
        const response = await axios
            .get(`${apiBaseUrl}/api/v1/todo/`)
            .then((res) => {
                return res.data;
            }).catch((err) => {
                return err.response;
            });
        return response;
    }
};

export default todoApi;

