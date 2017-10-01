'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFlatten = require('array-flatten');

var _arrayFlatten2 = _interopRequireDefault(_arrayFlatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalize = function normalize(location) {
  if (typeof location === 'string') {
    return location.split('.');
  }

  if (location instanceof Array) {
    return (0, _arrayFlatten2.default)(location).join('.').split('.');
  }

  throw new Error('Incorrect location type: ' + location);
};

exports.default = normalize;