import axios from "axios";

const Axios = axios.create({
  baseURL: "https://covid-api.mmediagroup.fr/v1"
});

export default Axios;
