'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _core = require('./core');

var core = _interopRequireWildcard(_core);

var _essentials = require('./essentials');

var essentials = _interopRequireWildcard(_essentials);

var _message = require('./message');

var message = _interopRequireWildcard(_message);

var _flow = require('./flow');

var builtInFlows = _interopRequireWildcard(_flow);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDictionary = function createDictionary(conf) {
  var flowProvider = typeof conf.flow === 'function' ? conf.flow : builtInFlows[conf.flow];

  var flow = function flow(func) {
    return function () {
      return flowProvider(func).apply(undefined, arguments);
    };
  };

  return _extends({}, (0, _polyMap2.default)(flow, core), (0, _polyMap2.default)(flow, essentials), {
    lift: function lift(func) {
      return flow(message.lift(func));
    }
  });
};

exports.default = createDictionary;