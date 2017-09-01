'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('./path');

var _message = require('./message');

var get = (0, _message.extend)(function (location, object) {
  return (0, _path.read)((0, _message.extract)(location), _extends({}, object.scope, object.data));
});

exports.default = get;