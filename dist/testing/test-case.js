'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var summarize = function summarize(results) {
  return results.reduce(function (acc, _ref) {
    var success = _ref.success;

    acc[success ? 'passed' : 'failed']++;
    return acc;
  }, { passed: 0, failed: 0 });
};

var testCase = function testCase(description, flow) {
  for (var _len = arguments.length, assertions = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    assertions[_key - 2] = arguments[_key];
  }

  return function () {
    return Promise.all(assertions.map(function (assertion) {
      return assertion(flow);
    })).then(summarize).then(function (summary) {
      return _extends({
        description: description,
        success: summary.failed === 0
      }, summary);
    });
  };
};

exports.default = testCase;