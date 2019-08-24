var express = require('express');
var router = express.Router();
var M = require('../models/hypothesis_model');
var model = new M();

router.get('/search/:text', function(req, res, next) {
  var query = req.params.text;
  console.info('SEARCH', query);
  model.fetchText(query, 0, 5, function(err, json) {
    var dx = {
      'title': 'Text Search',
      'data': JSON.stringify(json)
    };
    return res.render('index', dx);
  });
});

module.exports = router;
