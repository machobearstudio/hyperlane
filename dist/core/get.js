'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('../path');

var _message = require('../message');

var get = (0, _message.extend)(function (location, object) {
  var path = (0, _message.extract)(location);

  var value = (0, _path.read)(path, object.data);
  if (value === undefined) {
    value = (0, _path.read)(path, object.scope);
  }

  return value;
});

exports.default = get;