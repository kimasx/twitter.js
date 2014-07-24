var _ = require('underscore');

// create private namespace for data array and some functions for manipulating it
var store = function () {
  var data = [];

  return {
    push: function(name, text) {
      data.push({
        'name': name,
        'text': text,
        'id': data.length
      })
    },
    list: function() {
      return data;
    },
    find: function(properties) {
      return _.where(data, properties);
    }
  };
}();

// expose store object to rest of our app
module.exports = store;

/* FAKE DATA */
var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  store.push(getFakeName(), getFakeTweet());
}