'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = exports.concat = exports.zip = exports.tail = exports.head = exports.keys = exports.values = exports.isUndefined = exports.isDefined = exports.lte = exports.gte = exports.lt = exports.gt = exports.neq = exports.eq = exports.split = exports.join = exports.lowercase = exports.uppercase = exports.divide = exports.multiply = exports.subtract = exports.add = exports.xor = exports.or = exports.and = exports.not = exports.set = exports.get = exports.filter = exports.map = exports.when = exports.call = exports.all = exports.chain = exports.lift = undefined;

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

var _flow = require('./flow');

var flow = _interopRequireWildcard(_flow);

var _core = require('./core');

var core = _interopRequireWildcard(_core);

var _essentials = require('./essentials');

var essentials = _interopRequireWildcard(_essentials);

var _fragment = require('./fragment');

var _fragment2 = _interopRequireDefault(_fragment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lift = exports.lift = (0, _functionPipe2.default)(flow.lift, _fragment2.default);

var chain = exports.chain = (0, _fragment2.default)(flow.chain);
var all = exports.all = (0, _fragment2.default)(flow.all);
var call = exports.call = (0, _fragment2.default)(flow.functionCall);
var when = exports.when = (0, _fragment2.default)(flow.when);
var map = exports.map = (0, _fragment2.default)(flow.map);
var filter = exports.filter = (0, _fragment2.default)(flow.filter);

var get = exports.get = (0, _fragment2.default)(flow.functionCall(core.get));
var set = exports.set = (0, _fragment2.default)(flow.functionCall(core.set));

var not = exports.not = (0, _fragment2.default)(flow.lift(essentials.not));
var and = exports.and = (0, _fragment2.default)(flow.lift(essentials.and));
var or = exports.or = (0, _fragment2.default)(flow.lift(essentials.or));
var xor = exports.xor = (0, _fragment2.default)(flow.lift(essentials.xor));
var add = exports.add = (0, _fragment2.default)(flow.lift(essentials.add));
var subtract = exports.subtract = (0, _fragment2.default)(flow.lift(essentials.subtract));
var multiply = exports.multiply = (0, _fragment2.default)(flow.lift(essentials.multiply));
var divide = exports.divide = (0, _fragment2.default)(flow.lift(essentials.divide));
var uppercase = exports.uppercase = (0, _fragment2.default)(flow.lift(essentials.uppercase));
var lowercase = exports.lowercase = (0, _fragment2.default)(flow.lift(essentials.lowercase));
var join = exports.join = (0, _fragment2.default)(flow.lift(essentials.join));
var split = exports.split = (0, _fragment2.default)(flow.lift(essentials.split));
var eq = exports.eq = (0, _fragment2.default)(flow.lift(essentials.eq));
var neq = exports.neq = (0, _fragment2.default)(flow.lift(essentials.neq));
var gt = exports.gt = (0, _fragment2.default)(flow.lift(essentials.gt));
var lt = exports.lt = (0, _fragment2.default)(flow.lift(essentials.lt));
var gte = exports.gte = (0, _fragment2.default)(flow.lift(essentials.gte));
var lte = exports.lte = (0, _fragment2.default)(flow.lift(essentials.lte));
var isDefined = exports.isDefined = (0, _fragment2.default)(flow.lift(essentials.isDefined));
var isUndefined = exports.isUndefined = (0, _fragment2.default)(flow.lift(essentials.isUndefined));
var values = exports.values = (0, _fragment2.default)(flow.lift(essentials.values));
var keys = exports.keys = (0, _fragment2.default)(flow.lift(essentials.keys));
var head = exports.head = (0, _fragment2.default)(flow.lift(essentials.head));
var tail = exports.tail = (0, _fragment2.default)(flow.lift(essentials.tail));
var zip = exports.zip = (0, _fragment2.default)(flow.lift(essentials.zip));
var concat = exports.concat = (0, _fragment2.default)(flow.lift(essentials.concat));
var push = exports.push = (0, _fragment2.default)(flow.lift(essentials.push));