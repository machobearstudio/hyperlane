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

var extend = exports.extend = function extend(func) {
  return function (input) {
    var output = message(func(input));

    return message(output.data, _extends({}, input.scope, output.scope));
  };
};