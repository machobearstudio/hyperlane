'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _retransform = require('retransform');

var _retransform2 = _interopRequireDefault(_retransform);

var _message = require('./message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constant = function constant(value) {
  return (0, _message.extend)((0, _retransform2.default)(value));
};

exports.default = constant;