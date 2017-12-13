'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _normalize = require('./normalize');

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var write = function write(path, value, data) {
  if (path === '') {
    return value;
  }

  var location = (0, _normalize2.default)(path);
  var copy = _extends({}, data);
  var target = copy;
  var i = void 0;

  for (i = 0; i < location.length - 1; i++) {
    if (target[location[i]] === undefined) {
      target[location[i]] = {};
    } else {
      target[location[i]] = _extends({}, target[location[i]]);
    }

    target = target[location[i]];
  }

  target[location[i]] = value;

  return copy;
};

exports.default = write;