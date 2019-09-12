import axios from "axios";

const Api = () => {
  const baseURL = `${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`;

  if (!baseURL) {
    throw new Error("no base url provided");
  }

  return axios.create({
    baseURL,
    withCredentials: false
  });
};

export default Api;
