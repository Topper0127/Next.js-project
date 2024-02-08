import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/tutorials",
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    // "Access-Control-Allow-Origin": "*"
  }
});
