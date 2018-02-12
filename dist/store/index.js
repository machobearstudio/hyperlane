'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = exports.set = exports.get = exports.combine = exports.extend = exports.collapse = exports.extract = exports.construct = exports.isInstance = exports.setStore = exports.getStore = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _message = require('./message');

var simpleMessage = _interopRequireWildcard(_message);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var store = simpleMessage;

var createStore = function createStore(type) {
  return simpleMessage;
};

var getStore = exports.getStore = function getStore() {
  return store;
};

var setStore = exports.setStore = function setStore(conf) {
  store = _typeof(conf.store) === 'object' ? conf.store : createStore(conf.store);
};

var isInstance = exports.isInstance = function isInstance() {
  var _getStore;

  return (_getStore = getStore()).isInstance.apply(_getStore, arguments);
};
var construct = exports.construct = function construct() {
  var _getStore2;

  return (_getStore2 = getStore()).construct.apply(_getStore2, arguments);
};
var extract = exports.extract = function extract() {
  var _getStore3;

  return (_getStore3 = getStore()).extract.apply(_getStore3, arguments);
};
var collapse = exports.collapse = function collapse() {
  var _getStore4;

  return (_getStore4 = getStore()).collapse.apply(_getStore4, arguments);
};
var extend = exports.extend = function extend() {
  var _getStore5;

  return (_getStore5 = getStore()).extend.apply(_getStore5, arguments);
};
var combine = exports.combine = function combine() {
  var _getStore6;

  return (_getStore6 = getStore()).combine.apply(_getStore6, arguments);
};
var get = exports.get = function get() {
  var _getStore7;

  return (_getStore7 = getStore()).get.apply(_getStore7, arguments);
};
var set = exports.set = function set() {
  var _getStore8;

  return (_getStore8 = getStore()).set.apply(_getStore8, arguments);
};

var message = construct;
message.isInstance = isInstance;
message.construct = construct;
message.extract = extract;
message.extend = extend;
message.combine = combine;
message.get = get;
message.set = set;

exports.message = message;