import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // or your actual API endpoint
});
api.interceptors.request.use((Req) =>{
  const token = localStorage.getItem("token");
  if(token){
    Req.headders.Authorization=`Bearer ${token}`;

  }
  return Req;
});

export default api;