'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('./message');

var constant = function constant(value) {
  return (0, _message.extend)(function () {
    return value;
  });
};

exports.default = constant;