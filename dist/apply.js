'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('./message');

var apply = function apply(handler) {
  return (0, _message.extend)(function (input) {
    return handler.apply(undefined, (0, _message.extract)(input));
  });
};

exports.default = apply;