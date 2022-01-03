import axios from 'axios';

const api = axios.create({
  baseURL: `https://randomuser.me/api/`,
  headers: {
    'Content-Type': `application/json`,
  },
  params: {
    results: 1000,
    nat: `us`,
  },
});

export default api;
