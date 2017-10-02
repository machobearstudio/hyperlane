import fetch from 'node-fetch';
import { message, get, set, not, and, or, lift } from '../src/sync'
import log from './log'

// Test data
const state = {}

const test = message.construct({ a: true, b: false }, state)

const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

const all = (...handlers) => message.extend(input =>
  handlers
    .map(handler => handler(input))
    .reduce((acc, next) => message.construct(
      acc.data.concat([next.data]),
      { ...acc.scope, ...next.scope }
    ), message.construct([]))
)

const chain = (...handlers) => message.extend(input =>
  handlers.reduce((prev, handler) => handler(prev), input)
)

// Lenses
const summate = (x, y) => x + y
const sum = lift(summate)

// Test flows
const testFlow = chain(
  all(
    and(get('a'), get('b')),
    or(get('a'), get('b'))
  ),
  set('result', get(''))
)

log(test)
log(testFlow(test))
