import axios from "axios";

const api = axios.create({
  baseURL: "https://money-manager-r9q2.onrender.com", 
});

export default api;

// https://money-manager-r9q2.onrender.com