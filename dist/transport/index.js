'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forAll = exports.apply = exports.parallel = exports.sequential = exports.setTransport = exports.getTransport = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sync = require('./sync');

var sync = _interopRequireWildcard(_sync);

var _async = require('./async');

var async = _interopRequireWildcard(_async);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var transport = {};

var createTransport = function createTransport(type) {
  return type === 'sync' ? sync : async;
};

var getTransport = exports.getTransport = function getTransport() {
  return transport;
};

var setTransport = exports.setTransport = function setTransport(conf) {
  transport = _typeof(conf.transport) === 'object' ? conf.transport : createTransport(conf.transport);
};

var sequential = exports.sequential = function sequential() {
  var _getTransport;

  return (_getTransport = getTransport()).sequential.apply(_getTransport, arguments);
};
var parallel = exports.parallel = function parallel() {
  var _getTransport2;

  return (_getTransport2 = getTransport()).parallel.apply(_getTransport2, arguments);
};
var apply = exports.apply = function apply() {
  var _getTransport3;

  return (_getTransport3 = getTransport()).apply.apply(_getTransport3, arguments);
};
var forAll = exports.forAll = function forAll() {
  var _getTransport4;

  return (_getTransport4 = getTransport()).forAll.apply(_getTransport4, arguments);
};