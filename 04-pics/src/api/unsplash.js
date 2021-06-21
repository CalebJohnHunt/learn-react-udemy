import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID UUGaaRUf7oZJwc5q963Xel_sRVJ06jzXQliMR56M7lo' 
  },
});