'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pass = exports.lift = exports.functionCall = exports.all = exports.chain = exports.filter = exports.map = exports.when = exports.setTransport = exports.getTransport = undefined;

var _polyFilter = require('poly-filter');

var _polyFilter2 = _interopRequireDefault(_polyFilter);

var _message = require('../message');

var _fragment = require('./fragment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(x) {
  return x;
};
var fixPromise = function fixPromise(x) {
  return (0, _message.isMessage)(x) && x.data instanceof Promise ? x.data.then(function (data) {
    return (0, _message.construct)(data, x.scope);
  }) : x;
};

var transport = {};

var getTransport = exports.getTransport = function getTransport() {
  return transport;
};

var setTransport = exports.setTransport = function setTransport(newTransport) {
  transport = newTransport;
};

var sequential = function sequential() {
  var _getTransport;

  return (_getTransport = getTransport()).sequential.apply(_getTransport, arguments);
};
var parallel = function parallel() {
  var _getTransport2;

  return (_getTransport2 = getTransport()).parallel.apply(_getTransport2, arguments);
};
var apply = function apply() {
  var _getTransport3;

  return (_getTransport3 = getTransport()).apply.apply(_getTransport3, arguments);
};
var call = function call() {
  var _getTransport4;

  return (_getTransport4 = getTransport()).call.apply(_getTransport4, arguments);
};
var forAll = function forAll() {
  var _getTransport5;

  return (_getTransport5 = getTransport()).forAll.apply(_getTransport5, arguments);
};

var when = exports.when = (0, _fragment.fragment)(function (condition, yes, no) {
  return function (input) {
    var original = (0, _message.construct)(input);
    var flow = sequential([condition, fixPromise, function (x) {
      return (0, _message.extract)(x) ? yes(original) : no && no(original);
    }]);

    return flow(original);
  };
});

var map = exports.map = (0, _fragment.fragment)(function (func) {
  return sequential([_message.construct, _message.spread, forAll(func), _message.collect]);
});

var filter = exports.filter = (0, _fragment.fragment)(function (func) {
  return sequential([_message.construct, _message.spread, forAll(when(func, identity, function () {
    return undefined;
  })), (0, _polyFilter2.default)(function (x) {
    return x !== undefined;
  }), _message.collect]);
});

var chain = exports.chain = (0, _fragment.fragment)(function () {
  for (var _len = arguments.length, steps = Array(_len), _key = 0; _key < _len; _key++) {
    steps[_key] = arguments[_key];
  }

  return sequential([_message.construct].concat(steps));
});

var all = exports.all = (0, _fragment.fragment)(function () {
  for (var _len2 = arguments.length, steps = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    steps[_key2] = arguments[_key2];
  }

  return sequential([_message.construct, parallel(steps), _message.collect]);
});

var functionCall = exports.functionCall = function functionCall(func) {
  return (0, _fragment.fragment)(function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return sequential([_message.construct, parallel(args.concat([identity])), apply(func)]);
  });
};

var lift = exports.lift = function lift(func) {
  return (0, _fragment.fragment)(function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return sequential([_message.construct, parallel(args.concat([identity])), _message.collect, call((0, _message.applicator)(func)), fixPromise]);
  });
};

var pass = exports.pass = (0, _fragment.fragment)(function (x) {
  return function (input) {
    return x(input);
  };
});