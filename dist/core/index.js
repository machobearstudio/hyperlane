'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScope = exports.setData = exports.getData = exports.set = exports.get = undefined;

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

var _getData = require('./get-data');

var _getData2 = _interopRequireDefault(_getData);

var _getScope = require('./get-scope');

var _getScope2 = _interopRequireDefault(_getScope);

var _set = require('./set');

var _set2 = _interopRequireDefault(_set);

var _setData = require('./set-data');

var _setData2 = _interopRequireDefault(_setData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.get = _get2.default;
exports.set = _set2.default;
exports.getData = _getData2.default;
exports.setData = _setData2.default;
exports.getScope = _getScope2.default;