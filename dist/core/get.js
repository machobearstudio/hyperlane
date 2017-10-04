'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('../path');

var _message = require('../message');

var get = function get(location, input) {
  var path = (0, _message.extract)(location);

  if (path === '') {
    return input.data;
  }

  var value = (0, _path.read)(path, input.data);
  if (value === undefined) {
    value = (0, _path.read)(path, input.scope);
  }

  return (0, _message.construct)(value, input.scope);
};

exports.default = get;