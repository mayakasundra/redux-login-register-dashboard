import axios from "axios";
import { API_URL } from "../utils/Constants";
const myToken = localStorage.getItem("token");

export default axios.create({
  baseURL: `${API_URL}`,
  headers: {
    Authorization: `Bearer ${myToken}`,
  },
});
