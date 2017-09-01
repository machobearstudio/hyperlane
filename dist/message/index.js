'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.get = exports.message = undefined;

var _message = require('./message');

var message = _interopRequireWildcard(_message);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

var _set = require('./set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.message = message;
exports.get = _get2.default;
exports.set = _set2.default;