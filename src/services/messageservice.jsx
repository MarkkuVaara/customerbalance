import axios from 'axios';
const baseUrl = '/api/messages';

axios.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    }
);

let token = null;

const setToken = newToken => {
  token = `Bearer ${newToken}`
};

const getAll = () => {
    return axios.get(baseUrl);
};

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    };
    const response = await axios.post(baseUrl, newObject, config);
    return response;
};

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
};

export default { getAll, create, update, setToken };
