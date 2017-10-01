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