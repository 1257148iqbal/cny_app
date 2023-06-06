import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

export const http = axios.create({
  baseURL: REACT_APP_BASE_URL
  // timeout: 10000
});

http.interceptors.request.use(req => {
  return req;
});
