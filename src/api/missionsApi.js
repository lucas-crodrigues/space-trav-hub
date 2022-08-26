import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.spacexdata.com/v3/missions',
  headers: {
    'Content-type': 'application/json',
  },
});

const getAll = () => http.get();

const apiService = {
  getAll,
};

export default apiService;
