'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = exports.message = undefined;

var _dictionary = require('./dictionary');

Object.keys(_dictionary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dictionary[key];
    }
  });
});

var _transport = require('./transport');

var _transport2 = _interopRequireDefault(_transport);

var _flow = require('./flow');

var flow = _interopRequireWildcard(_flow);

var _message = require('./message');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var message = _message.construct;
message.construct = _message.construct;
message.extract = _message.extract;
message.combine = _message.combine;
message.collect = _message.collect;
message.spread = _message.spread;
message.extend = _message.extend;
message.applicator = _message.applicator;

exports.message = message;
var configure = exports.configure = function configure(config) {
  var transportProvider = config.flow || conf.transport;
  var transport = typeof transportProvider === 'function' ? transportProvider : (0, _transport2.default)(transportProvider);

  flow.setTransport(transport);
};

configure({ flow: 'async' });