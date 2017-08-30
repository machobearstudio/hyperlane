'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lift = exports.choice = exports.when = exports.apply = exports.constant = exports.chain = exports.all = exports.set = exports.get = exports.extend = exports.extract = exports.message = undefined;

var _autoConstants = require('./auto-constants');

var _autoConstants2 = _interopRequireDefault(_autoConstants);

var _lift = require('./lift');

var _lift2 = _interopRequireDefault(_lift);

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

var _message = require('./message');

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

var _set = require('./set');

var _set2 = _interopRequireDefault(_set);

var _all = require('./flow-control/all');

var _all2 = _interopRequireDefault(_all);

var _when = require('./flow-control/when');

var _when2 = _interopRequireDefault(_when);

var _choice = require('./flow-control/choice');

var _choice2 = _interopRequireDefault(_choice);

var _chain = require('./flow-control/chain');

var _chain2 = _interopRequireDefault(_chain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = (0, _autoConstants2.default)(_get2.default);
var set = (0, _autoConstants2.default)(_set2.default);
var all = (0, _autoConstants2.default)(_all2.default);
var chain = (0, _autoConstants2.default)(_chain2.default);
var when = (0, _autoConstants2.default)(_when2.default);
var choice = (0, _autoConstants2.default)(_choice2.default);

var lift = function lift(func) {
  return (0, _autoConstants2.default)((0, _lift2.default)(func));
};

exports.message = _message.message;
exports.extract = _message.extract;
exports.extend = _message.extend;
exports.get = get;
exports.set = set;
exports.all = all;
exports.chain = chain;
exports.constant = _constant2.default;
exports.apply = _message.apply;
exports.when = when;
exports.choice = choice;
exports.lift = lift;