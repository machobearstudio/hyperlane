'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require('../message');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var apply = function apply(arg) {
  return function (predicate) {
    return typeof predicate === 'function' ? predicate(arg) : predicate;
  };
};

var wrapPromise = function wrapPromise(input) {
  var inputMessage = (0, _message.construct)(input);

  if (inputMessage.data instanceof Promise) {
    return inputMessage.data.next(_message.construct);
  }

  return Promise.resolve(inputMessage);
};

var flow = function flow(func) {
  return function () {
    for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    return function (input) {
      return wrapPromise(input).then(function (x) {
        return Promise.all(parameters.map(apply(x)));
      }).then(function (params) {
        return func.arity > parameters.length ? func.apply(undefined, _toConsumableArray(params).concat([input])) : func.apply(undefined, _toConsumableArray(params));
      });
    };
  };
};

exports.default = flow;