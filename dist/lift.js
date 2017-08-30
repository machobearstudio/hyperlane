'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('./message');

var _all = require('./flow-control/all');

var _all2 = _interopRequireDefault(_all);

var _chain = require('./flow-control/chain');

var _chain2 = _interopRequireDefault(_chain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lift = function lift(func) {
  var applicator = (0, _message.apply)(func);

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _message.isMessage)(args[0]) ? applicator(args[0]) : (0, _chain2.default)((0, _all2.default)(args), applicator);
  };
};

exports.default = lift;