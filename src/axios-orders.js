import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-0709.firebaseio.com/'
});

export default instance;