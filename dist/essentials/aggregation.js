'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.constant = undefined;

var _message = require('../message');

var constant = exports.constant = (0, _message.lift)(function (x) {
  return x;
});
var all = exports.all = (0, _message.lift)(function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
});