'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = exports.isUndefined = exports.isDefined = exports.lte = exports.gte = exports.lt = exports.gt = exports.neq = exports.eq = exports.divide = exports.multiply = exports.subtract = exports.add = exports.xor = exports.or = exports.and = exports.not = exports.constant = exports.all = exports.lift = exports.set = exports.get = undefined;

var _dictionary = require('./dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _message = require('./message');

var message = _interopRequireWildcard(_message);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createDictionary = (0, _dictionary2.default)({ flow: 'async' }),
    get = _createDictionary.get,
    set = _createDictionary.set,
    lift = _createDictionary.lift,
    all = _createDictionary.all,
    constant = _createDictionary.constant,
    not = _createDictionary.not,
    and = _createDictionary.and,
    or = _createDictionary.or,
    xor = _createDictionary.xor,
    add = _createDictionary.add,
    subtract = _createDictionary.subtract,
    multiply = _createDictionary.multiply,
    divide = _createDictionary.divide,
    eq = _createDictionary.eq,
    neq = _createDictionary.neq,
    gt = _createDictionary.gt,
    lt = _createDictionary.lt,
    gte = _createDictionary.gte,
    lte = _createDictionary.lte,
    isDefined = _createDictionary.isDefined,
    isUndefined = _createDictionary.isUndefined;

exports.get = get;
exports.set = set;
exports.lift = lift;
exports.all = all;
exports.constant = constant;
exports.not = not;
exports.and = and;
exports.or = or;
exports.xor = xor;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.eq = eq;
exports.neq = neq;
exports.gt = gt;
exports.lt = lt;
exports.gte = gte;
exports.lte = lte;
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.message = message;