'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _arrayFlatten = require('array-flatten');

var _arrayFlatten2 = _interopRequireDefault(_arrayFlatten);

var _message = require('./message');

var _callWith = require('./utils/call-with');

var _callWith2 = _interopRequireDefault(_callWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collect = function collect(messages) {
  return messages.reduce(function (acc, next) {
    acc.data.push(next.data);
    acc.scope = _extends({}, acc.scope, next.scope);

    return acc;
  }, (0, _message.message)([]));
};

var all = function all() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var handlers = (0, _arrayFlatten2.default)(args);

  return function (input) {
    return collect(handlers.map((0, _callWith2.default)(input)));
  };
};

exports.default = all;