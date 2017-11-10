'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('../path');

var _message = require('../message');

var setData = function setData(location, value, input) {
  return (0, _message.construct)((0, _path.write)((0, _message.extract)(location), (0, _message.extract)(value), input.data), input.scope);
};

exports.default = setData;