"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sequential = exports.sequential = function sequential(funcs) {
  return function (input) {
    return funcs.reduce(function (prev, func) {
      return func(prev);
    }, input);
  };
};
var parallel = exports.parallel = function parallel(funcs) {
  return function (input) {
    return funcs.map(function (func) {
      return func(input);
    });
  };
};
var call = exports.call = function call(func) {
  return function (input) {
    return func(input);
  };
};
var apply = exports.apply = function apply(func) {
  return function (inputs) {
    return func.apply(undefined, inputs);
  };
};
var map = exports.map = function map(func) {
  return function (inputs) {
    return inputs.map(call(func));
  };
};