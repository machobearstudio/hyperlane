'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fragment = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _message = require('../message');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var constant = function constant(x) {
  return (0, _message.extend)(function () {
    return x;
  });
};

var defragment = function defragment(func) {
  return func.$name === 'Fragment' ? func() : func;
};

var structure = function structure(items) {
  var resolvers = (0, _polyMap2.default)(resolver, items);

  return (0, _index.getTransport)().sequential([_message.construct, (0, _index.getTransport)().parallel(resolvers), _message.collect]);
};

var resolver = function resolver(predicate) {
  if (typeof predicate === 'function') {
    return defragment(predicate);
  }

  if ((typeof predicate === 'undefined' ? 'undefined' : _typeof(predicate)) !== 'object' || predicate === null) {
    return constant(predicate);
  }

  return structure(predicate);
};

var fragment = exports.fragment = function fragment(func) {
  var Fragment = function Fragment() {
    for (var _len = arguments.length, parms = Array(_len), _key = 0; _key < _len; _key++) {
      parms[_key] = arguments[_key];
    }

    return func.apply(undefined, _toConsumableArray(parms.map(resolver)));
  };
  Fragment.$name = 'Fragment';

  return Fragment;
};