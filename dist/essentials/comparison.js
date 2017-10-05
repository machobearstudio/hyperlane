"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var eq = exports.eq = function eq(x, y) {
  return x === y;
};
var neq = exports.neq = function neq(x, y) {
  return x !== y;
};
var gt = exports.gt = function gt(x, y) {
  return x > y;
};
var lt = exports.lt = function lt(x, y) {
  return x < y;
};
var gte = exports.gte = function gte(x, y) {
  return x >= y;
};
var lte = exports.lte = function lte(x, y) {
  return x <= y;
};
var isDefined = exports.isDefined = function isDefined(x) {
  return x !== undefined;
};
var isUndefined = exports.isUndefined = function isUndefined(x) {
  return x === undefined;
};