'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divide = exports.multiply = exports.subtract = exports.add = undefined;

var _maybe = require('./maybe');

var add = exports.add = (0, _maybe.maybe2)(function (x, y) {
  return x + y;
});
var subtract = exports.subtract = (0, _maybe.maybe2)(function (x, y) {
  return x - y;
});
var multiply = exports.multiply = (0, _maybe.maybe2)(function (x, y) {
  return x * y;
});
var divide = exports.divide = (0, _maybe.maybe2)(function (x, y) {
  return x / y;
});