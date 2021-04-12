import axios from "axios";

const Axios = axios.create({
  baseURL: "https://corona.lmao.ninja/v2",
});

export default Axios;
