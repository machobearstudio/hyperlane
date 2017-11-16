'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _normalize = require('./normalize');

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var read = function read(path, data) {
  var location = (0, _normalize2.default)(path);
  var value = data;
  var i = void 0;

  for (var _i = 0; _i < location.length; _i++) {
    if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
      return undefined;
    }

    value = value[location[_i]];

    if (value === undefined) {
      return undefined;
    }
  }

  return value;
};

exports.default = read;