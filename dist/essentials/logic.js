'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xor = exports.or = exports.and = exports.not = undefined;

var _message = require('../message');

var not = exports.not = (0, _message.lift)(function (x) {
  return !x;
});
var and = exports.and = (0, _message.lift)(function (x, y) {
  return x && y;
});
var or = exports.or = (0, _message.lift)(function (x, y) {
  return x || y;
});
var xor = exports.xor = (0, _message.lift)(function (x, y) {
  return (x || y) && !(x && y);
});