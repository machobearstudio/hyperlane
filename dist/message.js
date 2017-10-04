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

var construct = exports.construct = function construct(data, scope) {
  if (data instanceof Message) {
    return data;
  }

  if (data instanceof Promise) {
    return data.then(function (resolved) {
      return construct(resolved, scope);
    });
  }

  return new Message(data, scope);
};

var extract = exports.extract = function extract(input) {
  if (input instanceof Message) {
    return input.data;
  }

  return input;
};

var combine = exports.combine = function combine(input, output) {
  return construct(output.data, _extends({}, input.scope, output.scope));
};

var extend = exports.extend = function extend(func) {
  return function (input) {
    return combine(input, construct(func(input)));
  };
};

var lift = exports.lift = function lift(func) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var scope = args.reduce(combine, construct()).scope;
    var parameters = args.map(extract);

    return construct(func.apply(undefined, parameters), scope);
  };
};