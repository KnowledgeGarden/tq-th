var Client = require('./drivers/http_request'),
  config = require('../config/config'),
  HypothesisModel;

  HypothesisModel =  module.exports = function() {
  var httpClient = new Client(config.HOST, config.PORT, "http");

  this.fetchAll = function (offset, count, callback ) {
    var query = '/'+offset+'/'+count;
    httpClient.get(config.APP_ALL, query, function(err, data) {
      console.info('FetchAll', err, data);
      return callback(err, data);
    });
  };

  this.fetchText = function(query, offset, count, callback) {
    var query = '/'+query+'/'+offset+'/'+count;
    console.info("QUERY", query);
    httpClient.get(config.APP_TEXT, query, function(err, data) {
      console.info('FetchText', err, data);
      return callback(err, data);
    });
  };

  this.fetchResources = function(offset, count, callback) {
    var query = '/'+offset+'/'+count;
    httpClient.get(config.APP_RESOURCES, query, function(err, data) {
      console.info('ModelFetchResources', err, data);
      return callback(err, data);
    });
  };
  this.fetchUsers = function(offset, count, callback) {
    var query = '/'+offset+'/'+count;
    httpClient.get(config.APP_USERS, query, function(err, data) {
      console.info('ModelFetchUsers', err, data);
      return callback(err, data);
    });
  };
  this.fetchTags = function(offset, count, callback) {
    var query = '/'+offset+'/'+count;
    httpClient.get(config.APP_TAGS, query, function(err, data) {
      console.info('ModelFetchTagPivot', err, data);
      return callback(err, data);
    });
  };

  this.fetchUserPivot = function(user, offset, count, callback) {
    var query = '/'+user+'/'+offset+'/'+count;
    httpClient.get(config.APP_USR_PIV, query, function(err, data) {
      console.info('ModelFetchUserPivot', err, data);
      return callback(err, data);
    });
  };

  this.fetchResourcePivot = function(resource, offset, count, callback) {
    var query = '/'+encodeURIComponent(resource)+'/'+offset+'/'+count;
    console.info("HMFRP", query);
    httpClient.get(config.APP_RES_PIV, query, function(err, data) {
      console.info('ModelFetchResourcePivot', err, data);
      return callback(err, data);
    });

  };

  this.fetchTagPivot = function(tag, offset, count, callback) {
    var query = '/'+tag+'/'+offset+'/'+count;
    console.info("HMFTP", query);
    httpClient.get(config.APP_TAG_PIV, query, function(err, data) {
      console.info('ModelFetchResources', err, data);
      return callback(err, data);
    });

  };
};
 

