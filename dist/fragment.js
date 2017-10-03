'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var identity = function identity(x) {
  return x;
};

var normalizeArguments = function normalizeArguments(func, params) {
  return func.arity > params.length ? params.concat([identity]) : params;
};

var isFragment = function isFragment(func) {
  return typeof func === 'function' && func.type !== undefined;
};

var fragment = function fragment() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length > 1) {
    return (0, _functionPipe2.default)(funcs.map(function (func) {
      return isFragment(func) ? func() : func;
    }));
  }

  var func = funcs[0];
  var Fragment = function Fragment() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }

    return func.apply(undefined, _toConsumableArray(normalizeArguments(func, params)));
  };

  Fragment.type = 'fragment';

  return Fragment;
};

exports.default = fragment;