'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

var _fragment = require('./fragment');

var _fragment2 = _interopRequireDefault(_fragment);

var _sync = require('./sync');

var _sync2 = _interopRequireDefault(_sync);

var _async = require('./async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApplicator = function createApplicator(flowProvider) {
  return function (func) {
    var handler = flowProvider(func);
    handler.arity = func.arity !== undefined ? func.arity : func.length;

    return handler;
  };
};

var createFlow = function createFlow(type) {
  return (0, _functionPipe2.default)(createApplicator(type === 'sync' ? _sync2.default : _async2.default), _fragment2.default);
};

exports.default = createFlow;