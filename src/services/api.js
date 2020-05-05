import axios from "axios";

const api = axios.create({
  baseURL: "https://megahack53-api.herokuapp.com",
});

export default api;
