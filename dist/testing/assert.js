"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var assert = function assert() {
  for (var _len = arguments.length, constraints = Array(_len), _key = 0; _key < _len; _key++) {
    constraints[_key] = arguments[_key];
  }

  return function (flow) {
    return function (input) {
      return Promise.all([input, flow(input)]).then(function (results) {
        return constraints.map(function (f) {
          return f.apply(undefined, _toConsumableArray(results));
        });
      });
    };
  };
};

exports.default = assert;