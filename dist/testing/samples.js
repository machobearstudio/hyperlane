'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var objects = exports.objects = [{}, { a: 'b' }, { a: 100, b: 'c' }, { a: 100500, b: '200300', c: { d: 2 } }];
var arrays = exports.arrays = [[], [1, 2, 5, 7], ['abc', 123, true]];
var numbers = exports.numbers = [0, 1, 100500, 0.0, 1.5, -10];
var strings = exports.strings = ['', 'doge wow such much!', '12345', '0'];
var booleans = exports.booleans = [true, false];

var primitives = exports.primitives = [].concat(numbers, strings, booleans);
var any = exports.any = [null, undefined].concat(_toConsumableArray(primitives), objects, arrays);

var anything = exports.anything = { data: any, scope: objects };