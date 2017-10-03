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

var applicator = function applicator(func) {
  return function () {
    for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    var Applicator = function Applicator(input) {
      return func.apply(undefined, _toConsumableArray(parameters.map(apply((0, _message.construct)(input)))));
    };

    return Applicator;
  };
};

exports.default = applicator;