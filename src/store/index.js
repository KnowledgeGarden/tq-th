import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/Api";
import config from "@/services/config";

const api = Api();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFetching: false,
    all_data: [],
    text: [],
    tags: [],
    resources: [],
    users: []
  },
  getters: {
    all: state => state.all_data,
    text: state => state.text,
    resources: state => state.resources,
    tags: state => state.tags,
    pivot: state => state.pivot,
    users: state => state.users
  },
  mutations: {
    SET_ISFETCHING(state, bool) {
      Vue.set(state, "isFetching", bool);
    },
    SET_TEXT(state, data) {
      Vue.set(state, "text", data);
    },
    SET_RESOURCES(state, data) {
      Vue.set(state, "resources", data);
    },
    SET_USERS(state, data) {
      Vue.set(state, "users", data);
    },
    SET_TAGS(state, data) {
      Vue.set(state, "tags", data);
    },
    SET_PIVOT(state, data) {
      Vue.set(state, "pivot", data);
    },
    SET_PRIMARY(state, data) {
      Vue.set(state, "all_data", data);
    }
  },
  actions: {
    FETCH_ALL: async (context, payload) => {
      const { offset, count } = payload;
      const query = `${config.APP_ALL}/${offset}/${count}`;
      console.info("httpService", "getAll", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const data = await api.get(query);
        context.commit("SET_PRIMARY", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("getAll error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },
    FETCH_TEXT: async (context, payload) => {
      const { term, offset, count } = payload;
      const query = `${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}${config.APP_TEXT}/${term}/${offset}/${count}`;
      console.info("httpService", "getText", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_TEXT", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_TEXT error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },
    FETCH_RESOURCES: async (context, payload) => {
      const { offset, count } = payload;
      const query = `${config.APP_RESOURCES}/${offset}/${count}`;
      console.info("httpService", "start", "getResources", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_RESOURCES", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_RESOURCES error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },
    FETCH_USERS: async (context, payload) => {
      const { offset, count } = payload;
      const query = `${config.APP_USERS}/${offset}/${count}`;
      console.info("httpService", "getUsers", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_USERS", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_USERS error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },
    FETCH_TAGS: async (context, payload) => {
      const { offset, count } = payload;
      var query = `${config.APP_TAGS}/${offset}/${count}`;
      console.info("httpService", "FETCH_TAGS", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_TAGS", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_TAGS error,", e);
        context.commit("SET_ISFETCHING", false);
      }
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
    FETCH_TAG_PIVOT: async (context, payload) => {
      const { tag, offset, count } = payload;
      var query = `${config.APP_TAG_PIV}/${tag}/${offset}/${count}`;
      console.info("httpService", "FETCH_TAG_PIVOT", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_PIVOT", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_TAG_PIVOT error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    }
  }
});
