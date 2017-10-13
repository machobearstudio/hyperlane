'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _polyFilter = require('poly-filter');

var _polyFilter2 = _interopRequireDefault(_polyFilter);

var _message = require('./message');

var _transport = require('./transport');

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(x) {
  return x;
};
var fixPromise = function fixPromise(x) {
  return (0, _message.isMessage)(x) && x.data instanceof Promise ? x.data.then(function (data) {
    return (0, _message.construct)(data, x.scope);
  }) : x;
};

var createFlow = function createFlow(config) {
  var transport = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : (0, _transport2.default)(config);
  var sequential = transport.sequential,
      parallel = transport.parallel,
      apply = transport.apply,
      call = transport.call,
      forAll = transport.forAll;


  var functionCall = function functionCall(func) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return sequential([_message.construct, parallel(args.concat([identity])), apply(func)]);
    };
  };

  var liftCall = function liftCall(func) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return sequential([_message.construct, parallel(args.concat([identity])), _message.collect, call((0, _message.applicator)(func)), fixPromise]);
    };
  };

  var when = function when(condition, yes, no) {
    return function (input) {
      var original = (0, _message.construct)(input);

      return sequential([condition, fixPromise, function (x) {
        return (0, _message.extract)(x) ? yes(original) : no && no(original);
      }])(original);
    };
  };

  var iterate = function iterate(func) {
    return sequential([_message.construct, _message.spread, forAll(func), _message.collect]);
  };

  var filter = function filter(func) {
    return sequential([_message.construct, _message.spread, forAll(when(func, identity, function () {
      return undefined;
    })), (0, _polyFilter2.default)(function (x) {
      return x !== undefined;
    }), _message.collect]);
  };

  var chain = function chain() {
    for (var _len3 = arguments.length, steps = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      steps[_key3] = arguments[_key3];
    }

    return sequential([_message.construct].concat(steps));
  };

  var all = function all() {
    for (var _len4 = arguments.length, steps = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      steps[_key4] = arguments[_key4];
    }

    return sequential([_message.construct, parallel(steps), _message.collect]);
  };

  var structure = function structure(items) {
    return sequential([_message.construct, parallel(items), _message.collect]);
  };

  return { functionCall: functionCall, liftCall: liftCall, when: when, iterate: iterate, filter: filter, chain: chain, all: all, structure: structure };
};

exports.default = createFlow;