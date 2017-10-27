'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forAll = exports.apply = exports.parallel = exports.sequential = undefined;

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequential = exports.sequential = function sequential(funcs) {
  return function (input) {
    return funcs.reduce(function (prev, func) {
      return func(prev);
    }, input);
  };
};
var parallel = exports.parallel = function parallel(funcs) {
  return function (input) {
    return (0, _polyMap2.default)(function (func) {
      return func(input);
    }, funcs);
  };
};
var apply = exports.apply = function apply(func) {
  return function (inputs) {
    return func.apply(undefined, inputs);
  };
};
var forAll = exports.forAll = function forAll(func) {
  return function (inputs) {
    return (0, _polyMap2.default)(function (input) {
      return func(input);
    }, inputs);
  };
};