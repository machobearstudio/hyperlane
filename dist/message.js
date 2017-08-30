"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Message(data, scope) {
  this.data = data;
  this.scope = scope || {};
}

var isMessage = exports.isMessage = function isMessage(data) {
  return data instanceof Message;
};

var message = exports.message = function message(data, scope) {
  if (data instanceof Message) {
    return data;
  }

  return new Message(data, scope);
};

var extract = exports.extract = function extract(input) {
  if (input instanceof Message) {
    return input.data;
  }

  return input;
};

var collapse = exports.collapse = function collapse(_ref) {
  var data = _ref.data,
      scope = _ref.scope;
  return _extends({}, scope, data);
};
var merge = exports.merge = function merge(input, output) {
  return message(output.data, _extends({}, input.scope, output.scope));
};

var collect = exports.collect = function collect(messages) {
  return messages.reduce(function (acc, next) {
    acc.scope = _extends({}, acc.scope, next.scope);

    if (next.data !== undefined) {
      acc.data.push(next.data);
    }

    return acc;
  }, message([]));
};

var extend = exports.extend = function extend(func) {
  return function (input) {
    return merge(input, message(func(input)));
  };
};

var apply = exports.apply = function apply(func) {
  return function () {
    for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }

    var input = collect(inputs);

    return merge(input, message(func.apply(undefined, input.data)));
  };
};