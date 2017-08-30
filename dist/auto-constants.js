'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

var _message = require('./message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var autoConstants = function autoConstants(func) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if ((0, _message.isMessage)(args[0])) {
      return func.apply(undefined, args);
    }

    return func.apply(undefined, _toConsumableArray(args.map(function (arg) {
      return typeof arg === 'function' ? arg : (0, _constant2.default)(arg);
    })));
  };
};

exports.default = autoConstants;