'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

var _message = require('./message');

var _core = require('./core');

var core = _interopRequireWildcard(_core);

var _essentials = require('./essentials');

var essentials = _interopRequireWildcard(_essentials);

var _flow = require('./flow');

var _flow2 = _interopRequireDefault(_flow);

var _fragment = require('./fragment');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = function id(x) {
  return x;
};
var fixPromise = function fixPromise(x) {
  return (0, _message.isMessage)(x) && x.data instanceof Promise ? x.data.then(function (data) {
    return (0, _message.construct)(data, x.scope);
  }) : x;
};

var createDictionary = function createDictionary(conf) {
  var flow = _typeof(conf.flow) === 'object' ? conf.flow : (0, _flow2.default)(conf.flow);
  var sequential = flow.sequential,
      parallel = flow.parallel,
      apply = flow.apply,
      call = flow.call,
      map = flow.map;


  var functionCall = function functionCall(func) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return sequential([_message.construct, parallel(args.concat([id])), apply(func)]);
    };
  };

  var liftCall = function liftCall(func) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return sequential([_message.construct, parallel(args.concat([id])), _message.collect, call((0, _message.applicator)(func)), fixPromise]);
    };
  };

  var when = function when(condition, yes, no) {
    return function (input) {
      return (0, _message.extract)(condition(input)) ? yes(input) : no && no(input);
    };
  };

  var iterate = function iterate(func) {
    return sequential([_message.construct, _message.spread, map(func), _message.collect]);
  };

  return _extends({}, (0, _polyMap2.default)((0, _functionPipe2.default)(functionCall, _fragment.fragment), core), (0, _polyMap2.default)((0, _functionPipe2.default)(liftCall, _fragment.fragment), essentials), {
    lift: (0, _functionPipe2.default)(liftCall, _fragment.fragment),
    chain: (0, _fragment.fragment)(function () {
      for (var _len3 = arguments.length, steps = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        steps[_key3] = arguments[_key3];
      }

      return sequential(steps.map(_fragment.defragment));
    }),
    all: (0, _fragment.fragment)(function () {
      for (var _len4 = arguments.length, steps = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        steps[_key4] = arguments[_key4];
      }

      return sequential([parallel(steps.map(_fragment.defragment)), _message.collect]);
    }),
    when: (0, _fragment.fragment)(when),
    map: (0, _fragment.fragment)(function (func) {
      return iterate((0, _fragment.defragment)(func));
    })
  });
};

exports.default = createDictionary;