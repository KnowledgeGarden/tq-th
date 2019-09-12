import Api from "@/services/Api";
import config from "./config";

const api = Api();

api.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

api.interceptors.response.use(response => {
  console.log("Response:", response);
  return response;
});

export default {
  async getAll(offset, count) {
    const query = `${config.APP_ALL}/${offset}/${count}`;
    console.info("httpService", "getAll", " - query: ", query);
    return await api.get(query);
  },
  async getText(string, offset, count) {
    const query = `${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}${config.APP_TEXT}/${string}/${offset}/${count}`;
    console.info("httpService", "getText", " - query: ", query);
    return await api.get(query);
  },
  getResources(offset, count) {
    const query = `${config.APP_RESOURCES}/${offset}/${count}`;
    console.info("httpService", "start", "getResources", " - query: ", query);
    return api.get(query);
  },
  getUsers(offset, count) {
    const query = `${config.APP_USERS}/${offset}/${count}`;
    console.info("httpService", "getUsers", " - query: ", query);
    return api.get(query);
  },
  getTags(offset, count) {
    var query = `${config.APP_TAGS}/${offset}/${count}`;
    console.info("httpService", "getUsers", " - query: ", query);
    return api.get(query);
  },
  getUserPivot(user, offset, count) {
    var query = `${config.APP_USR_PIV}/${user}/${offset}/${count}`;
    console.info("httpService", "getUsers", " - query: ", query);
    return api.get(query);
  },
  getResourcePivot(resource, offset, count) {
    const encodedResource = encodeURIComponent(resource);
    const query = `${config.APP_RES_PIV}/${encodedResource}/${offset}/${count}`;
    console.info("httpService", "getResourcePivot", " - query: ", query);
    return api.get(query);
  },
  getTagPivot(tag, offset, count) {
    var query = `${config.APP_TAG_PIV}/${tag}/${offset}/${count}`;
    console.info("httpService", "getTagPivot", " - query: ", query);
    return api.get(query);
  }
};
