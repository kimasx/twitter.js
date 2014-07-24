var express = require('express');
var router = express.Router();
var store = require('../store');

/* GET users listing. */
router.get('/:name', function(req, res) {
  // get name parameter from url
  var name = req.params.name;
  var tweets = store.find({name: name});
  res.render('index', {title: 'Posts by '+name, tweets: tweets, show_form: true, name: name});
});

router.get('/:name/:id', function(req, res) {
  // get name parameter from url
  var name = req.params.name;
  var id = parseInt(req.params.id);
  var tweets = store.find({id: id});
  res.render('index', {tweets: tweets, show_form: true});
});

module.exports = router;
