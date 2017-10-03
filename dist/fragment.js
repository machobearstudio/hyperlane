'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fragment = exports.isFragment = undefined;

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var identity = function identity(x) {
  return x;
};

var normalizeArguments = function normalizeArguments(arity, params) {
  return arity > params.length ? params.concat([identity]) : params;
};

var isFragment = exports.isFragment = function isFragment(func) {
  return typeof func === 'function' && func.type !== undefined;
};

var fragment = exports.fragment = function fragment(func) {
  var Fragment = function Fragment() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return func.apply(undefined, _toConsumableArray(normalizeArguments(func.arity, params)));
  };

  Fragment.type = 'call';

  return Fragment;
};