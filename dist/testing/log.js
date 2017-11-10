"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = function log(input) {
  if (input instanceof Promise) {
    return input.then(log);
  }

  console.log(input);

  return input;
};

exports.default = log;