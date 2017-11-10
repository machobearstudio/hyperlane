'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lift = exports.functionCall = exports.all = exports.chain = exports.filter = exports.map = exports.when = undefined;

var _polyFilter = require('poly-filter');

var _polyFilter2 = _interopRequireDefault(_polyFilter);

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

var _message = require('./message');

var _transport = require('./transport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(x) {
  return x;
};

var when = exports.when = function when(condition, yes, no) {
  return function (input) {
    var original = (0, _message.construct)(input);
    var branch = function branch(x) {
      return (0, _message.extract)(x) ? yes(original) : no && no(original);
    };
    var flow = (0, _transport.sequential)([condition, branch]);

    return flow(original);
  };
};

var map = exports.map = function map(func) {
  return (0, _transport.sequential)([_message.spread, (0, _transport.forAll)(func), _message.collect]);
};

var filter = exports.filter = function filter(func) {
  return (0, _transport.sequential)([_message.spread, (0, _transport.forAll)(when(func, identity, function () {
    return undefined;
  })), (0, _polyFilter2.default)(function (x) {
    return x !== undefined;
  }), _message.collect]);
};

var chain = exports.chain = function chain() {
  for (var _len = arguments.length, steps = Array(_len), _key = 0; _key < _len; _key++) {
    steps[_key] = arguments[_key];
  }

  return (0, _transport.sequential)(steps);
};

var all = exports.all = function all() {
  for (var _len2 = arguments.length, steps = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    steps[_key2] = arguments[_key2];
  }

  return (0, _transport.sequential)([(0, _transport.parallel)(steps), _message.collect]);
};

var functionCall = exports.functionCall = function functionCall(func) {
  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return (0, _transport.sequential)([_message.construct, (0, _transport.parallel)(args.concat([identity])), (0, _transport.apply)(func)]);
  };
};

var lift = exports.lift = (0, _functionPipe2.default)(_message.applicator, functionCall);