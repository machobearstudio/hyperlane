'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('./core');

var constant = function constant(value) {
  return (0, _core.extend)(function () {
    return value;
  });
};

exports.default = constant;