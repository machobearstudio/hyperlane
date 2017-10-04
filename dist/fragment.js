'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _curry = require('curry');

var _curry2 = _interopRequireDefault(_curry);

var _message = require('./message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(x) {
  return x;
};

var resolver = function resolver(predicate) {
  if (typeof predicate === 'function') {
    return predicate;
  }

  if ((typeof predicate === 'undefined' ? 'undefined' : _typeof(predicate)) !== 'object' || predicate === null) {
    return (0, _message.extend)(function () {
      return predicate;
    });
  }
};

var fragment = function fragment(applicator, reducer) {
  var Fragment = function Fragment() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return applicator(reducer, args.map(resolver).concat([identity]));
  };

  return Fragment;
};

exports.default = (0, _curry2.default)(fragment);