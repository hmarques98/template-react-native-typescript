import { BASE_URL } from '@env';
import { log } from '@utils/console';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: 'Timeout error',
});

instance.defaults.headers.common.Authorization = 'AUTH TOKEN';

instance.interceptors.request.use(
  (request) => {
    log(request.baseURL, 'baseURL');
    log(request.auth, 'auth');
    log(request.params, 'params');

    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    log(response.data, 'response axios');
    // Edit response config
    return response;
  },
  (error) => {
    log(error, 'error axios');
    return Promise.reject(error);
  },
);
export default instance;
