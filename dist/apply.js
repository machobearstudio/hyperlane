'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('./core');

var apply = function apply(handler) {
  return (0, _core.extend)(function (input) {
    return handler.apply(undefined, (0, _core.extract)(input));
  });
};

exports.default = apply;