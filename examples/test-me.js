var util = require('util')
var system = require('../dist')
var message = system.message
var extend = system.extend
var extract = system.extract
var constant = system.constant
var get = system.get
var set = system.set
var all = system.all
var pipe = system.pipe
var apply = system.apply
var lift = system.lift

function log(object) {
  console.log(util.inspect(object, {
    depth: null,
    colors: true
  }))
}

function toUpperCase(s) {
  return s.toUpperCase()
}

function summate(x, y) {
  return x + y
}

var toUpper = lift(toUpperCase)
var summ = lift(summate)

var state = {
  a: {
    b: {
      c: 100
    },
    d: 500
  }
}

var test = message(
  'doge',
  state
)

const flow = set(
  'a.summ',
  summ(
    get('a.b.c'),
    get('a.d')
  )
)

// var flow = pipe(
//   all(get('a.b.c'), get('a.d')),
//   summ
// )

log(flow(test))
