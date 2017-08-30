'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFlatten = require('array-flatten');

var _arrayFlatten2 = _interopRequireDefault(_arrayFlatten);

var _message = require('../message');

var _callWith = require('../utils/call-with');

var _callWith2 = _interopRequireDefault(_callWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var all = function all() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var handlers = (0, _arrayFlatten2.default)(args);

  return function (input) {
    return (0, _message.collect)(handlers.map((0, _callWith2.default)(input)));
  };
};

exports.default = all;