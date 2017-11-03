'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fragment = exports.structure = exports.constant = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _message = require('../message');

var _transport = require('../transport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defragment = function defragment(func) {
  return func.$class === 'Fragment' ? func() : func;
};

var constant = exports.constant = function constant(x) {
  return function () {
    return (0, _message.construct)(x);
  };
};

var structure = exports.structure = function structure(items) {
  return (0, _transport.sequential)([(0, _transport.parallel)((0, _polyMap2.default)(resolver, items)), _message.collect]);
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
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    var handler = func.apply(undefined, _toConsumableArray(params.map(resolver)));
    var Step = function Step(input) {
      return handler((0, _message.construct)(input));
    };
    Step.$class = 'Step';
    Step.$params = params;

    return Step;
  };

  Fragment.$class = 'Fragment';

  return Fragment;
};