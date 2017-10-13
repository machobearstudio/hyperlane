'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = exports.concat = exports.tail = exports.head = exports.zip = exports.keys = exports.values = undefined;

var _zip = require('../utils/zip');

var _zip2 = _interopRequireDefault(_zip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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