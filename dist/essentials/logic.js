'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.or = exports.and = exports.not = undefined;

var _message = require('../message');

var not = exports.not = (0, _message.lift)(function (x) {
  return !x;
});
var and = exports.and = (0, _message.lift)(function () {
  for (var _len = arguments.length, xs = Array(_len), _key = 0; _key < _len; _key++) {
    xs[_key] = arguments[_key];
  }

  return xs.reduce(function (acc, next) {
    return acc && next;
  }, true);
});
var or = exports.or = (0, _message.lift)(function () {
  for (var _len2 = arguments.length, xs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    xs[_key2] = arguments[_key2];
  }

  return xs.reduce(function (acc, next) {
    return acc || next;
  }, false);
});