import axios from 'axios';

import { ApiError } from './error';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? '/api'
    : process.env.NEXT_PUBLIC_BASE_URL;

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
  (response): Promise<any> => response.data,
  (error) => {
    if (error.response) {
      throw new ApiError(error);
    }

    throw error;
  },
);

export default client;
