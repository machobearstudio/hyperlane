'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('../message');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var apply = function apply(arg) {
  return function (predicate) {
    return typeof predicate === 'function' ? predicate(arg) : predicate;
  };
};

var wrapPromise = function wrapPromise(input) {
  if (input.data instanceof Promise) {
    return input.data;
  }

  return Promise.resolve(input);
};

var applicator = function applicator(func) {
  return function () {
    for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    var Applicator = function Applicator(input) {
      return wrapPromise((0, _message.construct)(input)).then(function (x) {
        return Promise.all(parameters.map(apply(x)));
      }).then(function (params) {
        return func.apply(undefined, _toConsumableArray(params));
      });
    };

    return Applicator;
  };
};

exports.default = applicator;