'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('../path');

var _message = require('../message');

var getScope = function getScope(location, input) {
  var path = (0, _message.extract)(location);
  if (path === '') {
    return input;
  }

  return (0, _message.construct)((0, _path.read)(path, input.scope), input.scope);
};

exports.default = getScope;