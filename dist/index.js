'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = exports.fragment = exports.transport = exports.message = undefined;

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

var _testing = require('./testing');

Object.keys(_testing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testing[key];
    }
  });
});

var _transport = require('./transport');

var transport = _interopRequireWildcard(_transport);

var _fragment = require('./fragment');

var _fragment2 = _interopRequireDefault(_fragment);

var _message = require('./message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var message = _message.construct;
message.construct = _message.construct;
message.extract = _message.extract;
message.combine = _message.combine;
message.collect = _message.collect;
message.spread = _message.spread;
message.applicator = _message.applicator;

exports.message = message;
exports.transport = transport;
exports.fragment = _fragment2.default;
var configure = exports.configure = function configure(config) {
  transport.setTransport(config);
};

configure({ transport: 'async' });