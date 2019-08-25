import axios from "axios";
import config from './config';

const Api = () => {
  const { HOST, PORT } = config;
  const baseURL = HOST && PORT ? `http://${HOST}:${PORT}` : null;

  if(! baseURL) {
    throw new Error('no base url provided')
  }

  return axios.create({
    baseURL,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export default Api;
