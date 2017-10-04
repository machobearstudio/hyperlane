'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sync = require('./sync');

var sync = _interopRequireWildcard(_sync);

var _async = require('./async');

var async = _interopRequireWildcard(_async);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var flow = function flow(type) {
  return type === 'sync' ? sync : async;
};

exports.default = flow;