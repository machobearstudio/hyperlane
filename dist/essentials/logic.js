"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var not = exports.not = function not(x) {
  return !x;
};
var and = exports.and = function and(x, y) {
  return x && y;
};
var or = exports.or = function or(x, y) {
  return x || y;
};
var xor = exports.xor = function xor(x, y) {
  return (x || y) && !(x && y);
};