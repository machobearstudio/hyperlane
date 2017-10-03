'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = exports.isDefined = exports.lte = exports.gte = exports.lt = exports.gt = exports.neq = exports.eq = undefined;

var _message = require('../message');

var eq = exports.eq = (0, _message.lift)(function (x, y) {
  return x === y;
});
var neq = exports.neq = (0, _message.lift)(function (x, y) {
  return x !== y;
});
var gt = exports.gt = (0, _message.lift)(function (x, y) {
  return x > y;
});
var lt = exports.lt = (0, _message.lift)(function (x, y) {
  return x < y;
});
var gte = exports.gte = (0, _message.lift)(function (x, y) {
  return x >= y;
});
var lte = exports.lte = (0, _message.lift)(function (x, y) {
  return x <= y;
});
var isDefined = exports.isDefined = (0, _message.lift)(function (x) {
  return x !== undefined;
});
var isUndefined = exports.isUndefined = (0, _message.lift)(function (x) {
  return x === undefined;
});