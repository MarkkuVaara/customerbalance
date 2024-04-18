import axios from 'axios';
const baseUrl = '/api/messages';

axios.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    }
);

const getAll = () => {
    return axios.get(baseUrl);
};

const create = newObject => {
    return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
};

export default { getAll, create, update };
