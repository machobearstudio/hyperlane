'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('../path');

var _message = require('./message');

var set = function set(path, value) {
  return function (input) {
    var location = path(input);
    var output = value(input);
    var newScope = (0, _path.write)(location.data, output.data, _extends({}, location.scope, output.scope));

    return (0, _message.message)(input.data, newScope);
  };
};

exports.default = set;