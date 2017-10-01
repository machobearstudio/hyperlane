'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalize = require('./normalize');

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var write = function write(path, value, data) {
  var location = (0, _normalize2.default)(path);
  var target = data;
  var i = void 0;

  for (i = 0; i < location.length - 1; i++) {
    if (target[location[i]] === undefined) {
      target[location[i]] = {};
    }

    target = target[location[i]];
  }

  target[location[i]] = value;

  return data;
};

exports.default = write;