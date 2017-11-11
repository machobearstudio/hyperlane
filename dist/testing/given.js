'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFlatten = require('array-flatten');

var _arrayFlatten2 = _interopRequireDefault(_arrayFlatten);

var _message = require('../message');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var given = function given(_ref) {
  var data = _ref.data,
      scope = _ref.scope;
  return (0, _arrayFlatten2.default)(scope.map(function (x) {
    return data.map(function (y) {
      return (0, _message.construct)(y, x);
    });
  }));
};

var objects = [{}, { a: 'b' }, { a: 100, b: 'c' }, { a: 100500, b: '200300', c: { d: 2 } }];
var arrays = [[], [1, 2, 5, 7], ['abc', 123, true]];
var numbers = [0, 1, 100500, 0.0, 1.5, -10];
var strings = ['', 'doge wow such much!', '12345', '0'];
var booleans = [true, false];

var primitives = [].concat(numbers, strings, booleans);
var any = [null, undefined].concat(_toConsumableArray(primitives), objects, arrays);

given.anything = given({ data: any, scope: objects });

exports.default = given;