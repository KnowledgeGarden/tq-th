import Api from "@/services/Api";

export default {
  getCurrentMovies(params = {}) {
    const { searchbar } = params;
    return Api().get(
      `/list_movies.json${searchbar ? "?query_term=" + searchbar : ""}`
    );
  }
};
