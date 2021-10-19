import axios from 'axios';

export default
   axios.create({
      baseURL: 'http://172.16.9.253:5005/api/',
      timeout: 2000
   });