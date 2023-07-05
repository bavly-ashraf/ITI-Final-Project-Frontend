import axios from "axios";
const port = 3000;
const BASE_URL = `http://localhost:${port}`;

export default axios.create({
  baseURL: BASE_URL,
});
