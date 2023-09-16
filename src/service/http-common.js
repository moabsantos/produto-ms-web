import axios from "axios";

const token = localStorage.getItem("tokenGoogle");

export default axios.create({
  baseURL: "https://images.queavanca.com",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});