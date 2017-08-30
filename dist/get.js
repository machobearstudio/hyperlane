'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('./path');

var _message = require('./message');

var get = function get(path) {
  return function (input) {
    var location = path(input);
    var value = (0, _path.read)(location.data, _extends({}, location.scope, input.data));

    return (0, _message.message)(value, location.scope);
  };
};

exports.default = get;