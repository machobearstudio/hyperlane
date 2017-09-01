"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

  return new Message(data, scope);
};

var extract = exports.extract = function extract(input) {
  if (input instanceof Message) {
    return input.data;
  }

  return input;
};

var merge = exports.merge = function merge(input, output) {
  return construct(output.data, _extends({}, input.scope, output.scope));
};

var extend = exports.extend = function extend(func) {
  var Wrapper = function Wrapper() {
    for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }

    return inputs.concat([construct(func.apply(undefined, inputs))]).reduce(merge, construct());
  };

  Wrapper.arity = func.length;

  return Wrapper;
};

var lift = exports.lift = function lift(func) {
  return extend(function () {
    for (var _len2 = arguments.length, inputs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      inputs[_key2] = arguments[_key2];
    }

    return func.apply(undefined, _toConsumableArray(inputs.map(extract)));
  });
};