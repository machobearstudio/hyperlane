'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applicator = exports.extend = exports.spread = exports.collect = exports.combine = exports.extract = exports.construct = exports.isMessage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Message(data, scope) {
  this.data = data;
  this.scope = scope || {};
}

var isMessage = exports.isMessage = function isMessage(data) {
  return data instanceof Message;
};

var construct = exports.construct = function construct(data, scope) {
  if (data instanceof Message) {
    return data;
  }

  return new Message(data, scope);
};

var extract = exports.extract = function extract(input) {
  if (input instanceof Message) {
    return input.data;
  }

  return input;
};

var combine = exports.combine = function combine(input, output) {
  return construct(output.data, _extends({}, input.scope, output.scope));
};

var collect = exports.collect = function collect(messages) {
  return construct((0, _polyMap2.default)(extract, messages), Object.values(messages).reduce(combine, construct()).scope);
};

var spread = exports.spread = function spread(input) {
  return (0, _polyMap2.default)(function (item) {
    return construct(item, input.scope);
  }, extract(input));
};

var extend = exports.extend = function extend(func) {
  return function (input) {
    return combine(input, construct(func(input)));
  };
};

var applicator = exports.applicator = function applicator(func) {
  return function (input) {
    return combine(input, construct(func.apply(undefined, extract(input))));
  };
};

var message = construct;
message.construct = construct;
message.extract = extract;
message.combine = combine;
message.collect = collect;
message.spread = spread;
message.extend = extend;
message.applicator = applicator;

exports.default = message;