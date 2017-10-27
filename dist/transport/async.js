'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forAll = exports.parallel = exports.sequential = exports.apply = undefined;

var _zip = require('../utils/zip');

var _zip2 = _interopRequireDefault(_zip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apply = exports.apply = function apply(func) {
  return function (inputs) {
    return Promise.all(inputs).then(function (xs) {
      return func.apply(undefined, xs);
    });
  };
};

var sequential = exports.sequential = function sequential(funcs) {
  return function (input) {
    return funcs.reduce(function (prev, func) {
      return prev.then(func);
    }, Promise.resolve(input)).catch(function (e) {
      return console.log(e);
    });
  };
};

var parallel = exports.parallel = function parallel(funcs) {
  return function (input) {
    return Promise.resolve(input).then(function (x) {
      return funcs instanceof Array ? Promise.all(funcs.map(function (func) {
        return func(input);
      })) : Promise.all(Object.values(funcs).map(function (func) {
        return func(input);
      })).then((0, _zip2.default)(Object.keys(funcs)));
    });
  };
};

var forAll = exports.forAll = function forAll(func) {
  return function (inputs) {
    return inputs instanceof Array ? Promise.all(inputs.map(function (input) {
      return func(input);
    })) : Promise.all(Object.values(inputs).map(function (input) {
      return func(input);
    })).then((0, _zip2.default)(Object.keys(inputs)));
  };
};