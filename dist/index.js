'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lift = exports.set = exports.get = exports.message = exports.configure = undefined;

var _message = require('./message');

var message = _interopRequireWildcard(_message);

var _flow = require('./flow');

var builtInFlows = _interopRequireWildcard(_flow);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

var _set = require('./set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var flow = builtInFlows.async;

var configure = function configure(conf) {
  if (typeof conf.flow === 'function') {
    flow = conf.flow;
  } else {
    flow = builtInFlows[conf.flow];
  }
};

var dynamicFlow = function dynamicFlow(func) {
  return function () {
    return flow(func).apply(undefined, arguments);
  };
};

var get = dynamicFlow(_get2.default);
var set = dynamicFlow(_set2.default);

var lift = function lift(func) {
  return flow(message.lift(func));
};

exports.configure = configure;
exports.message = message;
exports.get = get;
exports.set = set;
exports.lift = lift;