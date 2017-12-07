'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.get = exports.lift = exports.spread = exports.collect = undefined;

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collect = exports.collect = function collect(messages) {
  var inputs = (0, _polyMap2.default)(_store.construct, messages);

  return (0, _store.combine)(Object.values(inputs).reduce(_store.combine, (0, _store.construct)()), (0, _store.construct)((0, _polyMap2.default)(_store.extract, inputs)));
};

var spread = exports.spread = function spread(input) {
  return (0, _polyMap2.default)(function (item) {
    return (0, _store.combine)(input, (0, _store.construct)(item));
  }, (0, _store.extract)(input));
};

var lift = exports.lift = function lift(func) {
  return function () {
    for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }

    var collected = collect(inputs.map(_store.construct));
    var output = (0, _store.combine)(collected, (0, _store.construct)(func.apply(undefined, (0, _store.extract)(collected))));

    return (0, _store.extract)(output) instanceof Promise ? (0, _store.extract)(output).then(function (data) {
      return (0, _store.combine)(output, (0, _store.construct)(data));
    }) : output;
  };
};

exports.get = _store.get;
exports.set = _store.set;