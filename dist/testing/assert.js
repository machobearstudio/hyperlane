'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('curry');

var _curry2 = _interopRequireDefault(_curry);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = function assert(given, expected, flow) {
  return Promise.resolve(flow(given)).then(function (result) {
    return {
      success: (0, _deepEqual2.default)(result, expected)
    };
  });
};

exports.default = (0, _curry2.default)(assert);