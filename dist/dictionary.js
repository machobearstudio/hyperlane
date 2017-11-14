'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scope = exports.data = exports.id = exports.merge = exports.exclude = exports.select = exports.push = exports.concat = exports.zip = exports.tail = exports.head = exports.keys = exports.values = exports.isUndefined = exports.isDefined = exports.lte = exports.gte = exports.lt = exports.gt = exports.neq = exports.eq = exports.split = exports.join = exports.lowercase = exports.uppercase = exports.divide = exports.multiply = exports.subtract = exports.add = exports.xor = exports.or = exports.and = exports.not = exports.lens = exports.set = exports.get = exports.filter = exports.map = exports.either = exports.choice = exports.when = exports.call = exports.all = exports.chain = exports.lift = undefined;

var _fragment = require('./fragment');

var _fragment2 = _interopRequireDefault(_fragment);

var _flow = require('./flow');

var flow = _interopRequireWildcard(_flow);

var _core = require('./core');

var core = _interopRequireWildcard(_core);

var _essentials = require('./essentials');

var essentials = _interopRequireWildcard(_essentials);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The lift
var lift = exports.lift = function lift(func) {
  return (0, _fragment2.default)(flow.lift(func));
};

// Control flow fragments
var chain = exports.chain = (0, _fragment2.default)(flow.chain);
var all = exports.all = (0, _fragment2.default)(flow.all);
var call = exports.call = (0, _fragment2.default)(flow.functionCall);
var when = exports.when = (0, _fragment2.default)(flow.when);
var choice = exports.choice = (0, _fragment2.default)(flow.choice);
var either = exports.either = (0, _fragment2.default)(flow.either);
var map = exports.map = (0, _fragment2.default)(flow.map);
var filter = exports.filter = (0, _fragment2.default)(flow.filter);

// Lenses
var get = exports.get = (0, _fragment2.default)(flow.functionCall(core.get));
var set = exports.set = (0, _fragment2.default)(flow.functionCall(core.set));

var lens = exports.lens = function lens(location) {
  var Lens = get(location);
  Lens.get = get(location);
  Lens.set = function (value) {
    return set(location, value);
  };

  return Lens;
};

// Transformer fragments
var not = exports.not = lift(essentials.not);
var and = exports.and = lift(essentials.and);
var or = exports.or = lift(essentials.or);
var xor = exports.xor = lift(essentials.xor);
var add = exports.add = lift(essentials.add);
var subtract = exports.subtract = lift(essentials.subtract);
var multiply = exports.multiply = lift(essentials.multiply);
var divide = exports.divide = lift(essentials.divide);
var uppercase = exports.uppercase = lift(essentials.uppercase);
var lowercase = exports.lowercase = lift(essentials.lowercase);
var join = exports.join = lift(essentials.join);
var split = exports.split = lift(essentials.split);
var eq = exports.eq = lift(essentials.eq);
var neq = exports.neq = lift(essentials.neq);
var gt = exports.gt = lift(essentials.gt);
var lt = exports.lt = lift(essentials.lt);
var gte = exports.gte = lift(essentials.gte);
var lte = exports.lte = lift(essentials.lte);
var isDefined = exports.isDefined = lift(essentials.isDefined);
var isUndefined = exports.isUndefined = lift(essentials.isUndefined);
var values = exports.values = lift(essentials.values);
var keys = exports.keys = lift(essentials.keys);
var head = exports.head = lift(essentials.head);
var tail = exports.tail = lift(essentials.tail);
var zip = exports.zip = lift(essentials.zip);
var concat = exports.concat = lift(essentials.concat);
var push = exports.push = lift(essentials.push);
var select = exports.select = lift(essentials.select);
var exclude = exports.exclude = lift(essentials.exclude);
var merge = exports.merge = lift(essentials.merge);

// Shorthands
var id = exports.id = function id(x) {
  return get('')(x);
};

var data = exports.data = function data(x) {
  return get('')(x);
};
data.get = (0, _fragment2.default)(flow.functionCall(core.getData));
data.set = (0, _fragment2.default)(flow.functionCall(core.setData));

var scope = exports.scope = (0, _fragment2.default)(flow.functionCall(function (input) {
  return input.scope;
}));
scope.get = (0, _fragment2.default)(flow.functionCall(core.getScope));
scope.set = set;