import axios from 'axios';
const baseUrl = '/api/predict';

axios.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    }
);

const predict = async predictiondata => {
    console.log(predictiondata);
  const response = await axios.post(baseUrl, predictiondata);
  return response;
};

export default { predict };
