'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('./core');

var _apply = require('./apply');

var _apply2 = _interopRequireDefault(_apply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(x) {
  return x;
};

var lift = function lift(func) {
  return function () {
    var applicator = (0, _apply2.default)(func);

    if ((0, _core.isMessage)(arguments.length <= 0 ? undefined : arguments[0])) {
      return applicator.apply(undefined, arguments);
    }

    var collector = arguments.length ? _core.all.apply(undefined, arguments) : identity;

    return function (input) {
      return applicator(collector(input));
    };
  };
};

exports.default = lift;