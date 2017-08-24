'use strict';

var curry = require('curry');
var normalize = require('./normalize');

function write(path, value, data) {
  var location = normalize(path);
  var target = data;
  var i;

  for (i = 0; i < location.length - 1; i++) {
    if (target[location[i]] === undefined) {
      target[location[i]] = {};
    }

    target = target[location[i]];
  }

  target[location[i]] = value;

  return data;
}

module.exports = curry(write);