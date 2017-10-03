'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logic = require('./logic');

Object.keys(_logic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _logic[key];
    }
  });
});

var _math = require('./math');

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});

var _comparison = require('./comparison');

Object.keys(_comparison).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _comparison[key];
    }
  });
});

var _aggregation = require('./aggregation');

Object.keys(_aggregation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aggregation[key];
    }
  });
});