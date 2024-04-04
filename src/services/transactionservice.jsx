import axios from 'axios';
const baseUrl = '/api/transactions';

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