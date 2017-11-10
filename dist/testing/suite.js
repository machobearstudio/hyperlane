'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../index');

var suite = function suite(name) {
  for (var _len = arguments.length, scenarios = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    scenarios[_key - 1] = arguments[_key];
  }

  return function (config) {
    config && (0, _index.configure)(config);

    return Promise.all(scenarios.map(function (scenario) {
      return scenario(config);
    }));
  };
};

exports.default = suite;