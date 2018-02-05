'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _store = require('./store');

var _state = require('./state');

var _transport = require('./transport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var constant = function constant(x) {
  return (0, _store.extend)(function () {
    return x;
  });
};

var structure = function structure(items) {
  return (0, _transport.sequential)([(0, _transport.parallel)((0, _polyMap2.default)(resolver, items)), _state.collect]);
};

var isObject = function isObject(x) {
  return x !== null && x !== undefined && x.constructor && x.constructor.name === 'Object';
};

var resolver = function resolver(predicate) {
  if (typeof predicate === 'function') {
    return predicate;
  }

  if (isObject(predicate) || predicate instanceof Array) {
    return structure(predicate);
  }

  return constant(predicate);
};

var fragment = function fragment(func) {
  var Fragment = function Fragment() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if ((0, _store.isInstance)(args[0])) {
      return func()(args[0]);
    }

    var Flow = func.apply(undefined, _toConsumableArray(args.map(resolver).map(function (f) {
      return f.$class === 'Fragment' ? f() : f;
    })));

    return Flow;
  };

  Fragment.$class = 'Fragment';

  return Fragment;
};

exports.default = fragment;