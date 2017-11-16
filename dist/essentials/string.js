'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.split = exports.lowercase = exports.uppercase = undefined;

var _maybe = require('./maybe');

var uppercase = exports.uppercase = (0, _maybe.maybe1)(function (x) {
  return String(x).toUpperCase();
});
var lowercase = exports.lowercase = (0, _maybe.maybe1)(function (x) {
  return String(x).toLowerCase();
});
var split = exports.split = (0, _maybe.maybe2)(function (x, y) {
  return String(y).split(x);
});