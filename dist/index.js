'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _async = require('./async');

Object.keys(_async).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _async[key];
    }
  });
});

var _dictionary = require('./dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dictionary2.default;