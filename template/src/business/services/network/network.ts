import { BASE_URL } from '@env';
import axios from 'axios';

const networkInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: 'Timeout error',
});

networkInstance.defaults.headers.common.Authorization = 'AUTH TOKEN';

networkInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

networkInstance.interceptors.response.use(
  (response) => {
    // Edit response config

    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  },
);
export default networkInstance;
