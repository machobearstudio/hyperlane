'use strict';

var curry = require('curry');
var normalize = require('./normalize');

function read(path, data) {
  var location = normalize(path);
  var value = data;

  for (var i = 0; i < location.length; i++) {
    value = value[location[i]];

    if (value === undefined) {
      return undefined;
    }
  }

  return value;
}

module.exports = curry(read);