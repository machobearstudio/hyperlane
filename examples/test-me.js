import util from 'util'
import { message, extend, extract, constant, get, set, all, when, choice, chain, apply, lift } from '../dist'

const log = object => console.log(util.inspect(object, {
  depth: null,
  colors: true
}))

const toUpperCase = s => s.toUpperCase()
const summate = (x, y) => x + y

const toUpper = lift(toUpperCase)
const summ = lift(summate)

const state = {
  a: {
    b: {
      c: 100
    },
    d: 500
  }
}

const test = message(
  'doge',
  state
)

// const flow = set(
//   'a.summ',
//   summ(
//     get('a.b.c'),
//     get('a.d')
//   )
// )

// var flow = chain(
//   all(get('a.b.c'), get('a.d')),
//   summ
// )

const flow = choice(get('a.b.c'), { 100: 'adsdasd' })

log(flow(test))
