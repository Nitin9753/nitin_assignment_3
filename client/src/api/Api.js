import axios from "axios";

const API = axios.create({ baseURL: 'https://avatart-web-app.onrender.com/api/v1/user' });



export default API;
