'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callWith = function callWith(input, handler) {
  return handler(input);
};

exports.default = (0, _curry2.default)(callWith);