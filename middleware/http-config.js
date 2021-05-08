import axios from "axios";

export default axios.create({
  baseURL: "https://quikix-api.herokuapp.com/",
  responseType: "json",
  timeout: 6000,
});
