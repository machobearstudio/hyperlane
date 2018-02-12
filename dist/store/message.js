'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.get = exports.extend = exports.combine = exports.collapse = exports.extract = exports.construct = exports.isInstance = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('../path');

function Message(data, scope) {
  this.data = data;
  this.scope = scope || {};
}

var isInstance = exports.isInstance = function isInstance(data) {
  return data instanceof Message;
};

var construct = exports.construct = function construct(data, scope) {
  if (data instanceof Message) {
    return data;
  }

  return new Message(data, scope);
};

var extract = exports.extract = function extract(input) {
  return isInstance(input) ? input.data : input;
};

var collapse = exports.collapse = function collapse(input) {
  return isInstance(input) ? { data: input.data, scope: input.scope } : { data: input, scope: {} };
};

var combine = exports.combine = function combine(input, output) {
  return construct(output.data, _extends({}, input.scope, output.scope));
};

var extend = exports.extend = function extend(func) {
  return function (input) {
    return combine(input, construct(func(input)));
  };
};

var get = exports.get = function get(location, input) {
  var path = extract(location);
  if (path === '') {
    return input;
  }

  var value = (0, _path.read)(path, input.data);
  if (value === undefined) {
    value = (0, _path.read)(path, input.scope);
  }

  return construct(value, input.scope);
};

var set = exports.set = function set(location, value, input) {
  return construct(input.data, (0, _path.write)(extract(location), extract(value), input.scope));
};