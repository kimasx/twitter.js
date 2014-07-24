// require data store from store.js
var store = require('../store');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var tweetadded = req.query.tweetadded;
  var tweets = store.list();
  var renderscrope = {title: '', tweets: tweets, show_form: true }
  if (tweetadded == 'true') {
    renderscrope.alertmessage = 'Tweet Just Added.'
  }
  res.render('index', renderscrope);
});

// create /submit route
router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  // broadcast new_tweet event by using socket.io
  io.sockets.emit("new_tweet", { title: 'Twitter.js', text: text, name: name, show_form: true });
  store.push(name, text);
  res.redirect('/?tweetadded=true');
});

module.exports = router;
