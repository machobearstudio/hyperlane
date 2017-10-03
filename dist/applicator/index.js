'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var applicator = function applicator(type) {
  return createApplicator(type === 'sync' ? _sync2.default : _async2.default);
};

exports.default = applicator;