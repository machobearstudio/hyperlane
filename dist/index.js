'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flow = exports.set = exports.get = exports.message = undefined;

var _message = require('./message');

var _flow = require('./flow');

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = (0, _flow2.default)(_message.get);
var set = (0, _flow2.default)(_message.set);

exports.message = _message.message;
exports.get = get;
exports.set = set;
exports.flow = _flow2.default;