import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.1.12:5000/api',
});

export default apiClient;
