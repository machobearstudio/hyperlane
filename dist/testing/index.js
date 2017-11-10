'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suite = exports.testCase = exports.assert = exports.log = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _log = require('./log');

Object.defineProperty(exports, 'log', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_log).default;
  }
});

var _assert = require('./assert');

Object.defineProperty(exports, 'assert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_assert).default;
  }
});

var _testCase = require('./test-case');

Object.defineProperty(exports, 'testCase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_testCase).default;
  }
});

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var run = function run(f) {
  return f();
};

var summarize = function summarize(results) {
  return results.reduce(function (acc, next) {
    acc[next.success ? 'passed' : 'failed'].push(next.description);
    acc.log.push(next);
    return acc;
  }, { passed: [], failed: [], log: [] });
};

var suite = exports.suite = function suite(name) {
  for (var _len = arguments.length, cases = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    cases[_key - 1] = arguments[_key];
  }

  return function (config) {
    config && (0, _index.configure)(config);

    return Promise.all(cases.map(run)).then(summarize).then(function (results) {
      return _extends({
        name: name,
        success: results.failed.length === 0
      }, results);
    });
  };
};