"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sequential = exports.sequential = function sequential(funcs) {
  return function (input) {
    return funcs.reduce(function (prev, func) {
      return prev.then(func);
    }, Promise.resolve(input));
  };
};
var parallel = exports.parallel = function parallel(funcs) {
  return function (input) {
    return Promise.resolve(input).then(function (x) {
      return Promise.all(funcs.map(function (func) {
        return func(input);
      }));
    });
  };
};
var call = exports.call = function call(func) {
  return function (input) {
    return Promise.resolve(input).then(func);
  };
};
var apply = exports.apply = function apply(func) {
  return function (inputs) {
    return Promise.all(inputs).then(function (xs) {
      return func.apply(undefined, xs);
    });
  };
};
var map = exports.map = function map(func) {
  return function (inputs) {
    return Promise.all(inputs.map(call(func)));
  };
};