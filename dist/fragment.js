'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('./store');

var _structure = require('./structure');

var _structure2 = _interopRequireDefault(_structure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fragment = function fragment(func) {
  var Fragment = function Fragment() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if ((0, _store.isInstance)(args[0])) {
      return func()(args[0]);
    }

    var Flow = func.apply(undefined, _toConsumableArray(args.map(_structure2.default).map(function (f) {
      return f.$class === 'Fragment' ? f() : f;
    })));

    return Flow;
  };

  Fragment.$class = 'Fragment';

  return Fragment;
};

exports.default = fragment;