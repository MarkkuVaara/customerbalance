import axios from 'axios';
const baseUrl = '/api/users';

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

const create = newObject => {
    return axios.post(baseUrl, newObject);
};

const update = async (id, newObject) => {
    const config = {
        headers: { Authorization: token },
    };
    const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
    return response;
};

export default { getAll, create, update, setToken };
