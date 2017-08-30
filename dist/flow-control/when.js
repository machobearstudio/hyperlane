'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('../message');

var when = function when(check, success, fail) {
  return function (input) {
    return (0, _message.extract)(check(input)) ? success(input) : fail(input);
  };
};

exports.default = when;