import axios from 'axios';
import { ITEMS_API_URL } from 'js/environment';

const getItemsAsync = () => {
    const request = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          ['Content-Type']: 'application/json',
        },
        url: ITEMS_API_URL
    };
    return axios(request)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        return error.response;
    });
};

export default {
    getItemsAsync,
};