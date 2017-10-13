'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = exports.push = exports.concat = exports.zip = exports.tail = exports.head = exports.keys = exports.values = exports.isUndefined = exports.isDefined = exports.lte = exports.gte = exports.lt = exports.gt = exports.neq = exports.eq = exports.lowercase = exports.uppercase = exports.divide = exports.multiply = exports.subtract = exports.add = exports.xor = exports.or = exports.and = exports.not = exports.array = exports.object = exports.filter = exports.map = exports.all = exports.chain = exports.when = exports.call = exports.register = exports.lift = exports.set = exports.get = undefined;

var _dictionary = require('./dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createDictionary = (0, _dictionary2.default)({ flow: 'sync' }),
    get = _createDictionary.get,
    set = _createDictionary.set,
    lift = _createDictionary.lift,
    register = _createDictionary.register,
    call = _createDictionary.call,
    when = _createDictionary.when,
    chain = _createDictionary.chain,
    all = _createDictionary.all,
    map = _createDictionary.map,
    filter = _createDictionary.filter,
    object = _createDictionary.object,
    array = _createDictionary.array,
    not = _createDictionary.not,
    and = _createDictionary.and,
    or = _createDictionary.or,
    xor = _createDictionary.xor,
    add = _createDictionary.add,
    subtract = _createDictionary.subtract,
    multiply = _createDictionary.multiply,
    divide = _createDictionary.divide,
    uppercase = _createDictionary.uppercase,
    lowercase = _createDictionary.lowercase,
    eq = _createDictionary.eq,
    neq = _createDictionary.neq,
    gt = _createDictionary.gt,
    lt = _createDictionary.lt,
    gte = _createDictionary.gte,
    lte = _createDictionary.lte,
    isDefined = _createDictionary.isDefined,
    isUndefined = _createDictionary.isUndefined,
    values = _createDictionary.values,
    keys = _createDictionary.keys,
    head = _createDictionary.head,
    tail = _createDictionary.tail,
    zip = _createDictionary.zip,
    concat = _createDictionary.concat,
    push = _createDictionary.push;

exports.get = get;
exports.set = set;
exports.lift = lift;
exports.register = register;
exports.call = call;
exports.when = when;
exports.chain = chain;
exports.all = all;
exports.map = map;
exports.filter = filter;
exports.object = object;
exports.array = array;
exports.not = not;
exports.and = and;
exports.or = or;
exports.xor = xor;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.uppercase = uppercase;
exports.lowercase = lowercase;
exports.eq = eq;
exports.neq = neq;
exports.gt = gt;
exports.lt = lt;
exports.gte = gte;
exports.lte = lte;
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.values = values;
exports.keys = keys;
exports.head = head;
exports.tail = tail;
exports.zip = zip;
exports.concat = concat;
exports.push = push;
exports.message = _message2.default;