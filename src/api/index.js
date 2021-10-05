import axios from 'axios';

export default
   axios.create({
      baseURL: 'http://104.251.214.174/isparktv/webui/api/index.php/api/',
      timeout: 2000
   });