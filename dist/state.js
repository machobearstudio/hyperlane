'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lift = exports.spread = exports.collect = undefined;

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _message = require('./message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collect = exports.collect = function collect(messages) {
  var inputs = (0, _polyMap2.default)(_message.construct, messages);

  return (0, _message.combine)(Object.values(inputs).reduce(_message.combine, (0, _message.construct)()), (0, _message.construct)((0, _polyMap2.default)(_message.extract, inputs)));
};

var spread = exports.spread = function spread(input) {
  return (0, _polyMap2.default)(function (item) {
    return (0, _message.combine)(input, (0, _message.construct)(item));
  }, (0, _message.extract)(input));
};

var lift = exports.lift = function lift(func) {
  return function () {
    for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }

    var collected = collect(inputs.map(_message.construct));
    var output = (0, _message.combine)(collected, (0, _message.construct)(func.apply(undefined, (0, _message.extract)(collected))));

    return (0, _message.extract)(output) instanceof Promise ? (0, _message.extract)(output).then(function (data) {
      return (0, _message.combine)(output, (0, _message.construct)(data));
    }) : output;
  };
};