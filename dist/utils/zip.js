'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zip = function zip(keys, values) {
  var i = 0;
  var acc = {};

  for (; i < keys.length; i++) {
    acc[keys[i]] = values[i];
  }

  return acc;
};

exports.default = (0, _curry2.default)(zip);