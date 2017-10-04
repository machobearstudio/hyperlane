"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var call = exports.call = function call(func, args) {
  return function (input) {
    return func.apply(undefined, _toConsumableArray(args.map(function (x) {
      return x(input);
    })));
  };
};

var chain = exports.chain = function chain(normalize, funcs) {
  return function (input) {
    return normalize(funcs).reduce(function (prev, func) {
      return func(prev);
    }, input);
  };
};

var when = exports.when = function when(extract, _ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      condition = _ref2[0],
      yes = _ref2[1],
      _ref2$ = _ref2[2],
      no = _ref2$ === undefined ? function () {
    return undefined;
  } : _ref2$;

  return function (input) {
    return extract(condition(input)) ? yes(input) : no(input);
  };
};

var all = exports.all = function all(collect, funcs) {
  return function (input) {
    return collect(funcs.map(function (func) {
      return func(input);
    }));
  };
};