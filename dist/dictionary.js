'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createDictionary = function createDictionary(conf) {
  var flow = (0, _flow2.default)(conf.flow || conf.transport);
  var functionCall = flow.functionCall,
      liftCall = flow.liftCall,
      when = flow.when,
      iterate = flow.iterate,
      filter = flow.filter,
      chain = flow.chain,
      all = flow.all,
      structure = flow.structure;


  return _extends({
    lift: (0, _functionPipe2.default)(liftCall, _fragment.fragment),
    chain: (0, _fragment.fragment)(function () {
      for (var _len = arguments.length, steps = Array(_len), _key = 0; _key < _len; _key++) {
        steps[_key] = arguments[_key];
      }

      return chain.apply(undefined, _toConsumableArray(steps.map(_fragment.defragment)));
    }),
    all: (0, _fragment.fragment)(function () {
      for (var _len2 = arguments.length, steps = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        steps[_key2] = arguments[_key2];
      }

      return all.apply(undefined, _toConsumableArray(steps.map(_fragment.defragment)));
    }),
    array: (0, _fragment.fragment)(function () {
      for (var _len3 = arguments.length, steps = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        steps[_key3] = arguments[_key3];
      }

      return all.apply(undefined, _toConsumableArray(steps.map(_fragment.defragment)));
    }),
    object: (0, _fragment.fragment)(function (items) {
      return structure(items);
    }),
    when: (0, _fragment.fragment)(function () {
      for (var _len4 = arguments.length, steps = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        steps[_key4] = arguments[_key4];
      }

      return when.apply(undefined, _toConsumableArray(steps.map(_fragment.defragment)));
    }),
    map: (0, _fragment.fragment)(function (func) {
      return iterate((0, _fragment.defragment)(func));
    }),
    filter: (0, _fragment.fragment)(function (func) {
      return filter((0, _fragment.defragment)(func));
    })
  }, (0, _polyMap2.default)((0, _functionPipe2.default)(functionCall, _fragment.fragment), core), (0, _polyMap2.default)((0, _functionPipe2.default)(liftCall, _fragment.fragment), essentials));
};

exports.default = createDictionary;