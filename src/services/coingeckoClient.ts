import axios from 'axios';

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

export const coingeckoClient = axios.create({
  baseURL: COINGECKO_BASE_URL,
  timeout: 10000,
});

coingeckoClient.interceptors.request.use(config => {
  const headers = config.headers;

  if (API_KEY && headers) {
    config.headers['x-cg-demo-api-key'] = API_KEY;
  }

  return config;
});
