'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = exports.concat = exports.zip = exports.tail = exports.head = exports.keys = exports.values = exports.isUndefined = exports.isDefined = exports.lte = exports.gte = exports.lt = exports.gt = exports.neq = exports.eq = exports.split = exports.join = exports.lowercase = exports.uppercase = exports.divide = exports.multiply = exports.subtract = exports.add = exports.xor = exports.or = exports.and = exports.not = exports.set = exports.get = exports.filter = exports.map = exports.when = exports.pass = exports.call = exports.all = exports.chain = exports.lift = undefined;

var _flow = require('./flow');

var flow = _interopRequireWildcard(_flow);

var _core = require('./core');

var core = _interopRequireWildcard(_core);

var _essentials = require('./essentials');

var essentials = _interopRequireWildcard(_essentials);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var lift = exports.lift = flow.lift;
var chain = exports.chain = flow.chain;
var all = exports.all = flow.all;
var call = exports.call = flow.functionCall;
var pass = exports.pass = flow.pass;
var when = exports.when = flow.when;
var map = exports.map = flow.map;
var filter = exports.filter = flow.filter;

var get = exports.get = flow.functionCall(core.get);
var set = exports.set = flow.functionCall(core.set);

var not = exports.not = flow.lift(essentials.not);
var and = exports.and = flow.lift(essentials.and);
var or = exports.or = flow.lift(essentials.or);
var xor = exports.xor = flow.lift(essentials.xor);
var add = exports.add = flow.lift(essentials.add);
var subtract = exports.subtract = flow.lift(essentials.subtract);
var multiply = exports.multiply = flow.lift(essentials.multiply);
var divide = exports.divide = flow.lift(essentials.divide);
var uppercase = exports.uppercase = flow.lift(essentials.uppercase);
var lowercase = exports.lowercase = flow.lift(essentials.lowercase);
var join = exports.join = flow.lift(essentials.join);
var split = exports.split = flow.lift(essentials.split);
var eq = exports.eq = flow.lift(essentials.eq);
var neq = exports.neq = flow.lift(essentials.neq);
var gt = exports.gt = flow.lift(essentials.gt);
var lt = exports.lt = flow.lift(essentials.lt);
var gte = exports.gte = flow.lift(essentials.gte);
var lte = exports.lte = flow.lift(essentials.lte);
var isDefined = exports.isDefined = flow.lift(essentials.isDefined);
var isUndefined = exports.isUndefined = flow.lift(essentials.isUndefined);
var values = exports.values = flow.lift(essentials.values);
var keys = exports.keys = flow.lift(essentials.keys);
var head = exports.head = flow.lift(essentials.head);
var tail = exports.tail = flow.lift(essentials.tail);
var zip = exports.zip = flow.lift(essentials.zip);
var concat = exports.concat = flow.lift(essentials.concat);
var push = exports.push = flow.lift(essentials.push);