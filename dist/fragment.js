'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defragment = exports.fragment = undefined;

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

var fragment = exports.fragment = (0, _curry2.default)(function (applicator, reducer) {
  var Fragment = function Fragment() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var parameters = args.map(resolver);
    if (args.length === 0 || args.length < reducer.length) {
      parameters.push(identity);
    }

    return applicator(reducer, parameters);
  };

  return Fragment;
});

var defragment = exports.defragment = function defragment(func) {
  return func.name === 'Fragment' ? func() : func;
};