'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = exports.exclude = exports.select = exports.push = exports.concat = exports.tail = exports.head = exports.zip = exports.keys = exports.values = exports.join = undefined;

var _polySelect = require('poly-select');

var _polySelect2 = _interopRequireDefault(_polySelect);

var _polyExclude = require('poly-exclude');

var _polyExclude2 = _interopRequireDefault(_polyExclude);

var _zip = require('../utils/zip');

var _zip2 = _interopRequireDefault(_zip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var join = exports.join = function join(x, ys) {
  return ys.join(x);
};
var values = exports.values = function values(xs) {
  return Object.values(xs);
};
var keys = exports.keys = function keys(xs) {
  return Object.keys(xs);
};
var zip = exports.zip = function zip(keys, values) {
  return (0, _zip2.default)(kes, values);
};
var head = exports.head = function head(xs) {
  return xs[0];
};
var tail = exports.tail = function tail(xs) {
  return xs.slice(1);
};
var concat = exports.concat = function concat(xs, ys) {
  return xs.concat(ys);
};
var push = exports.push = function push(xs, y) {
  return xs.concat([y]);
};
var select = exports.select = function select(y, xs) {
  return (0, _polySelect2.default)(y, xs);
};
var exclude = exports.exclude = function exclude(y, xs) {
  return (0, _polyExclude2.default)(y, xs);
};
var merge = exports.merge = function merge(xs, ys) {
  return Object.assign(xs, ys);
};