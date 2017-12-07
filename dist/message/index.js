'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.set = exports.isInstance = exports.extend = exports.combine = exports.extract = exports.construct = undefined;

var _message = require('./message');

var message = _message.construct;
message.isInstance = _message.isInstance;
message.construct = _message.construct;
message.extract = _message.extract;
message.extend = _message.extend;
message.combine = _message.combine;
message.get = _message.get;
message.set = _message.set;

exports.construct = _message.construct;
exports.extract = _message.extract;
exports.combine = _message.combine;
exports.extend = _message.extend;
exports.isInstance = _message.isInstance;
exports.set = _message.set;
exports.get = _message.get;
exports.default = message;