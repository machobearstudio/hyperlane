'use strict';

var flatten = require('array-flatten');

function normalize(location) {
  if (typeof location === 'string') {
    return location.split('.');
  }

  if (location instanceof Array) {
    return flatten(location).join('.').split('.');
  }

  throw new Error('Incorrect location type: ' + location);
}

module.exports = normalize;