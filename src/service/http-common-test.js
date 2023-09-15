import axios from "axios";

const token = localStorage.getItem("tokenGoogle");

export default axios.create({
  
  //baseURL: "http://localhost:8082",
      //"Content-type": "application/json"
  baseURL: "https://images.queavanca.com",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});