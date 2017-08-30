import util from 'util'
import { message, extend, extract, constant, get, set, all, when, choice, chain, apply, lift } from '../src'
import fetch from 'node-fetch';

const log = object => console.log(util.inspect(object, {
  depth: null,
  colors: true
}))

const toUpperCase = s => s.toUpperCase()
const summate = (x, y) => x + y

const toUpper = lift(toUpperCase)
const summ = lift(summate)
const identity = lift(x => x)

const state = {
  isLoading: false,
  results: [1, 2, 3]
}

const fetchGithub = lift(() =>
  fetch('https://github.com/').then(res => res.text())
);

const flow = set(
  'a.summ',
  summ(
    get('a'),
    get('b')
  )
)

// var flow = chain(
//   all(get('a'), get('b')),
//   summ
// )

// const flow = chain(
//   fetchGithub,
//   toUpper,
//   log
// )

// const searchContext = choice(get('type'), {
//   clearResults: set('results', []),
//   searchAddress: set('results', fetchGithub())
// })

// const flow = all(searchContext)

const clear = message({ type: 'clearResults' }, state)
const search = message({ type: 'searchAddress' }, state)
const test = message({ a: 100, b: 200 }, state)

log(test)
log(flow(test))
