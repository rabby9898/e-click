import axios from "axios";

const AxiosSecure = axios.create({
  baseURL: "http://localhost:9090",
});

export default AxiosSecure;
