'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('../path');

var _message = require('../message');

var getData = function getData(location, input) {
  var path = (0, _message.extract)(location);
  if (path === '') {
    return input;
  }

  return (0, _message.construct)((0, _path.read)(path, input.data), input.scope);
};

exports.default = getData;