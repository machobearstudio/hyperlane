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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var defragment = exports.defragment = function defragment(func) {
  return func.$name === 'Fragment' ? func() : func;
};