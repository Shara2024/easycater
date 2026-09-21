import axios from 'axios';

const getApiUrl = () => import.meta.env.VITE_API_URL || 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL: getApiUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (import.meta.env.DEV) {
    console.debug(`Making request to: ${config.url}`);
  }
  return config;
});

export default axiosInstance;
