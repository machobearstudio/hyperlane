"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var uppercase = exports.uppercase = function uppercase(x) {
  return String(x).toUpperCase();
};
var lowercase = exports.lowercase = function lowercase(x) {
  return String(x).toLowerCase();
};
var split = exports.split = function split(x, y) {
  return String(y).split(x);
};
var join = exports.join = function join(x, ys) {
  return ys.join(x);
};