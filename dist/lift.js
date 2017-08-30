'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('./message');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var lift = function lift(func) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var applicator = (0, _message.apply)(func);

    if ((0, _message.isMessage)(args[0])) {
      return applicator(args[0]);
    }

    var collector = function collector(input) {
      return args.length ? args.map(function (arg) {
        return arg(input);
      }) : [input];
    };

    return function (input) {
      return applicator.apply(undefined, _toConsumableArray(collector(input)));
    };
  };
};

exports.default = lift;