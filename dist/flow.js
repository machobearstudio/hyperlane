'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functionCall = exports.all = exports.chain = exports.filter = exports.map = exports.either = exports.when = undefined;

var _polyFilter = require('poly-filter');

var _polyFilter2 = _interopRequireDefault(_polyFilter);

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

var _store = require('./store');

var _state = require('./state');

var _transport = require('./transport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(x) {
  return x;
};

var when = exports.when = function when(condition, yes) {
  var no = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return function (input) {
    var original = (0, _store.construct)(input);
    var branch = function branch(x) {
      return (0, _store.extract)(x) ? yes(original) : no(original);
    };
    var flow = (0, _transport.sequential)([condition, branch]);

    return flow(original);
  };
};

var either = exports.either = function either(left, right) {
  return function (input) {
    var original = (0, _store.construct)(input);
    var branch = function branch(x) {
      return (0, _store.extract)(x) === undefined ? right(original) : x;
    };
    var flow = (0, _transport.sequential)([left, branch]);

    return flow(original);
  };
};

var map = exports.map = function map(func) {
  var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
  return (0, _transport.sequential)([iterator, _state.spread, (0, _transport.forAll)(func), _state.collect]);
};

var filter = exports.filter = function filter(func) {
  var iterator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
  return (0, _transport.sequential)([iterator, _state.spread, (0, _transport.forAll)(when(func, identity, function () {
    return undefined;
  })), (0, _polyFilter2.default)(function (x) {
    return x !== undefined;
  }), _state.collect]);
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

  return (0, _transport.sequential)([(0, _transport.parallel)(steps), _state.collect]);
};

var functionCall = exports.functionCall = function functionCall(func) {
  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return (0, _transport.sequential)([_store.construct, (0, _transport.parallel)(args.concat([identity])), (0, _transport.apply)(func)]);
  };
};