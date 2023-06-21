import axios from 'axios';

import { ApiError } from './error';

const BASE_URL = '/api';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    throw error;
  },
);

client.interceptors.response.use(
  (response): Promise<any> => {
    return Promise.resolve({
      status: response.status,
      data: response.data,
    });
  },
  (error) => {
    if (error.response) {
      throw new ApiError(error);
    }

    throw error;
  },
);

export default client;
