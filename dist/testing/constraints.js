'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataInvariant = exports.scopeInvariant = exports.messageOutput = undefined;

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _message = require('../message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageOutput = exports.messageOutput = function messageOutput(input, output) {
  return (0, _message.isMessage)(output);
};
var scopeInvariant = exports.scopeInvariant = function scopeInvariant(input, output) {
  return (0, _deepEqual2.default)(input.scope, output.scope);
};
var dataInvariant = exports.dataInvariant = function dataInvariant(input, output) {
  return (0, _deepEqual2.default)(input.data, output.data);
};