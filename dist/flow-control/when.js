'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../core');

var when = function when(check, success, fail) {
  return function (input) {
    return (0, _core.extract)(check(input)) ? success(input) : fail(input);
  };
};

exports.default = when;