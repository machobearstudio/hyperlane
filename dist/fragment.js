'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _message = require('./message');

var _state = require('./state');

var _transport = require('./transport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var constant = function constant(x) {
  return (0, _message.extend)(function () {
    return x;
  });
};

var structure = function structure(items) {
  return (0, _transport.sequential)([(0, _transport.parallel)((0, _polyMap2.default)(resolver, items)), _state.collect]);
};

var resolver = function resolver(predicate) {
  if (typeof predicate === 'function') {
    return predicate.$class === 'Fragment' ? predicate() : predicate;
  }

  if ((typeof predicate === 'undefined' ? 'undefined' : _typeof(predicate)) !== 'object' || predicate === null) {
    return constant(predicate);
  }

  return structure(predicate);
};

var fragment = function fragment(func) {
  var Fragment = function Fragment() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _message.isInstance)(args[0]) ? func()(args[0]) : func.apply(undefined, _toConsumableArray(args.map(resolver)));
  };

  Fragment.$class = 'Fragment';

  return Fragment;
};

exports.default = fragment;