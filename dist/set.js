'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('./path');

var _message = require('./message');

var set = (0, _message.extend)(function (location, value, object) {
  return (0, _message.construct)(undefined, (0, _path.write)((0, _message.extract)(location), (0, _message.extract)(value), {}));
});

exports.default = set;