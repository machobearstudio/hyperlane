"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var maybe1 = exports.maybe1 = function maybe1(f) {
  return function (x) {
    return x === undefined ? undefined : f(x);
  };
};
var maybe2 = exports.maybe2 = function maybe2(f) {
  return function (x, y) {
    return x === undefined || y === undefined ? undefined : f(x, y);
  };
};