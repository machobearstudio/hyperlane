'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../core');

var evaluate = function evaluate(predicate, input) {
  return typeof predicate === 'function' ? predicate(input) : predicate;
};

var choice = function choice(check, options) {
  return (0, _core.extend)(function (input) {
    var value = (0, _core.extract)(check(input));
    var option = (0, _core.extract)(options(input))[value];

    return typeof option === 'function' ? option(input) : option;
  });
};

exports.default = choice;