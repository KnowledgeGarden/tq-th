import Api from "@/services/Api";

const api = Api();

export default {
  getCurrentMovies(params = {}) {
    const { searchbar } = params;
    return api.get(
      `/list_movies.json${searchbar ? "?query_term=" + searchbar : ""}`
    );
  },
  fetchAll(offset, count, callback ) {
    var query = '/'+offset+'/'+count;
    api.get(config.APP_ALL, query, function(err, data) {
      console.info('FetchAll', err, data);
      return callback(err, data);
    });
  },
  fetchText(query, offset, count, callback) {
    var query = '/'+query+'/'+offset+'/'+count;
    console.info("QUERY", query);
    api.get(config.APP_TEXT, query, function(err, data) {
      console.info('FetchText', err, data);
      return callback(err, data);
    });
  },
  fetchResources(offset, count, callback) {
    var query = '/'+offset+'/'+count;
    api.get(config.APP_RESOURCES, query, function(err, data) {
      console.info('ModelFetchResources', err, data);
      return callback(err, data);
    });
  },
  fetchUsers(offset, count, callback) {
    var query = '/'+offset+'/'+count;
    api.get(config.APP_USERS, query, function(err, data) {
      console.info('ModelFetchUsers', err, data);
      return callback(err, data);
    });
  },
  fetchTags(offset, count, callback) {
    var query = '/'+offset+'/'+count;
    api.get(config.APP_TAGS, query, function(err, data) {
      console.info('ModelFetchTagPivot', err, data);
      return callback(err, data);
    });
  },
  fetchUserPivot(user, offset, count, callback) {
    var query = '/'+user+'/'+offset+'/'+count;
    api.get(config.APP_USR_PIV, query, function(err, data) {
      console.info('ModelFetchUserPivot', err, data);
      return callback(err, data);
    });
  },
  fetchResourcePivot(resource, offset, count, callback) {
    var query = '/'+encodeURIComponent(resource)+'/'+offset+'/'+count;
    console.info("HMFRP", query);
    api.get(config.APP_RES_PIV, query, function(err, data) {
      console.info('ModelFetchResourcePivot', err, data);
      return callback(err, data);
    });

  },
  fetchTagPivot(tag, offset, count, callback) {
    var query = '/'+tag+'/'+offset+'/'+count;
    console.info("HMFTP", query);
    api.get(config.APP_TAG_PIV, query, function(err, data) {
      console.info('ModelFetchResources', err, data);
      return callback(err, data);
    })
  }
}
