'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFlatten = require('array-flatten');

var _arrayFlatten2 = _interopRequireDefault(_arrayFlatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var foldAnd = function foldAnd(xs) {
  return xs.reduce(function (acc, x) {
    return acc && x;
  }, true);
};

var given = function given(inputs, check) {
  return function (flow) {
    return Promise.all(inputs.map(check(flow))).then(_arrayFlatten2.default).then(foldAnd);
  };
};

exports.default = given;