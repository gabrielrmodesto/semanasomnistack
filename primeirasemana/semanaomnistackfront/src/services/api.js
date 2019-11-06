import axios from 'axios';

const api = axios.create({
  baseURL: "https://omnistackgabriel.herokuapp.com",
});

export default api;
