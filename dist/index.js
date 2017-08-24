'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lift = exports.apply = exports.constant = exports.chain = exports.all = exports.set = exports.get = exports.extend = exports.extract = exports.message = undefined;

var _autoConstants = require('./auto-constants');

var _autoConstants2 = _interopRequireDefault(_autoConstants);

var _lift = require('./lift');

var _lift2 = _interopRequireDefault(_lift);

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

var _apply = require('./apply');

var _apply2 = _interopRequireDefault(_apply);

var _core = require('./core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = (0, _autoConstants2.default)(_core.get);
var set = (0, _autoConstants2.default)(_core.set);
var all = (0, _autoConstants2.default)(_core.all);
var chain = (0, _autoConstants2.default)(_core.chain);

var lift = function lift(func) {
  return (0, _autoConstants2.default)((0, _lift2.default)(func));
};

exports.message = _core.message;
exports.extract = _core.extract;
exports.extend = _core.extend;
exports.get = get;
exports.set = set;
exports.all = all;
exports.chain = chain;
exports.constant = _constant2.default;
exports.apply = _apply2.default;
exports.lift = lift;