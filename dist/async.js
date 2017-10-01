'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDictionary = exports.message = exports.or = exports.and = exports.not = exports.lift = exports.set = exports.get = undefined;

var _message = require('./message');

var message = _interopRequireWildcard(_message);

var _dictionary = require('./dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dictionary = (0, _dictionary2.default)({
  flow: 'async'
});

var get = dictionary.get,
    set = dictionary.set,
    lift = dictionary.lift,
    not = dictionary.not,
    and = dictionary.and,
    or = dictionary.or;
exports.get = get;
exports.set = set;
exports.lift = lift;
exports.not = not;
exports.and = and;
exports.or = or;
exports.message = message;
exports.createDictionary = _dictionary2.default;
exports.default = dictionary;