var express = require('express');
var router = express.Router();
var M = require('../models/hypothesis_model');
var model = new M();

/* GET home page. */
router.get('/', function(req, res, next) {
  model.fetchAll(0, 5, function(err, json) {
    var dx = {};
    dx.title = 'Express';
    dx.data = JSON.stringify(json);
    return res.render('index', dx);
  });
});

router.get('/search', function(req, res, next) {
  var query = req.query.search;
  console.info('SEARCH', query);
  model.fetchText(query, 0, 5, function(err, json) {
    var dx = {
      'title': 'Text Search',
      'data': json
    };
    return res.render('index', dx);
  });
});

router.get('/tresources', function(req, res, next) {
  model.fetchResources(0, 600, function(err, json) {
    var dx = {};
    dx.title = 'Resources';
    dx.data = json;
    console.log('*Resources*', dx);
    return res.render('resources', dx);
  });
});
router.get('/tusers', function(req, res, next) {
  model.fetchUsers(0, 600, function(err, json) {
    var dx = {};
    dx.title = 'Users';
    dx.data = json;
    console.log('*USERS*', dx);
    return res.render('users', dx);
 });
});
router.get('/ttags', function(req, res, next) {
  model.fetchTags(0, 1200, function(err, json) {
    var dx = {};
    dx.title = 'Tags';
    dx.data = json;
    console.log('*TAGS*', dx);
    return res.render('tags', dx);
  });
});
router.get('/tagpiv', function(req, res, next) {
  var tag = req.query.tag,
      offset = req.query.offset,
      count = req.query.count;

  model.fetchTagPivot(tag, offset, count, function(err, json) {
    var dx = {};
    dx.tag = tag;
    dx.data = json;
    console.log('TagPivot', dx);
    return res.render('tag_pivot', dx);
  });
});
router.get('/respiv', function(req, res, next) {
  var url = req.query.resource,
      offset = req.query.offset,
      count = req.query.count;

  model.fetchResourcePivot(url, offset, count, function(err, json) {
    var dx = {};
    dx.url = url;
    if (json && json.text && json.text.length > 0) {
      dx.title = json.text[0].title;
    }
    dx.data = json;
    console.log('ResourcePivot', dx);
    return res.render('resource_pivot', dx);
  });
});
router.get('/userpiv', function(req, res, next) {
  var usr = req.query.user,
      offset = req.query.offset,
      count = req.query.count;

  model.fetchUserPivot(usr, offset, count, function(err, json) {
    var dx = {};
    dx.usr = usr;
    dx.data = json;
    console.log('UserPivot', dx);
    return res.render('user_pivot', dx);
  });
});
module.exports = router;
