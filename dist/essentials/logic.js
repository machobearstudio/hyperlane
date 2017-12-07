'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xor = exports.or = exports.and = exports.not = undefined;

var _maybe = require('./maybe');

var not = exports.not = (0, _maybe.maybe1)(function (x) {
  return !x;
});
var and = exports.and = (0, _maybe.maybe2)(function (x, y) {
  return x && y;
});
var or = exports.or = (0, _maybe.maybe2)(function (x, y) {
  return x || y;
});
var xor = exports.xor = (0, _maybe.maybe2)(function (x, y) {
  return (x || y) && !(x && y);
});