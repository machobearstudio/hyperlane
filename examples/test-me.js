import fetch from 'node-fetch';
import remap from 'retransform';
import { message, get, set, flow } from '../src'
import log from './log'

// Test data
const state = {
  isLoading: false,
  results: [1, 2, 3]
}

const clear = message.construct({ type: 'clearResults' }, state)
const search = message.construct({ type: 'searchAddress' }, state)
const test = message.construct({ a: 100, b: 200 }, state)

// const getGithub = flow(() => fetch('https://github.com/').then(res => res.text()))

// Lenses
const summate = message.lift((x, y) => x + y)
const sum = flow(summate)

// Test flows
const testFlow = set(
  'summ',
  sum(get('a'), get('b'))
)

log(test)
log(testFlow(test))
