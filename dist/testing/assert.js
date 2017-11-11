"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var assert = function assert() {
  for (var _len = arguments.length, constraints = Array(_len), _key = 0; _key < _len; _key++) {
    constraints[_key] = arguments[_key];
  }

  return function (flow) {
    return function (input) {
      return Promise.resolve(flow(input)).then(function (output) {
        return constraints.map(function (f) {
          return f(input, output);
        });
      });
    };
  };
};

exports.default = assert;