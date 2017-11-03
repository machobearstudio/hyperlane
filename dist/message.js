'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applicator = exports.spread = exports.collect = exports.combine = exports.extract = exports.construct = exports.isMessage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

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
  var inputs = (0, _polyMap2.default)(construct, messages);

  return construct((0, _polyMap2.default)(extract, inputs), Object.values(inputs).reduce(combine, construct()).scope);
};

var spread = exports.spread = function spread(input) {
  return (0, _polyMap2.default)(function (item) {
    return construct(item, input.scope);
  }, extract(input));
};

var applicator = exports.applicator = function applicator(func) {
  return function () {
    for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }

    var collected = collect(inputs.map(construct));
    var output = combine(collected, construct(func.apply(undefined, extract(collected))));

    return output.data instanceof Promise ? output.data.then(function (data) {
      return construct(data, output.scope);
    }) : output;
  };
};