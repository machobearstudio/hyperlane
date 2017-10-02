import fetch from 'node-fetch';
import { message, get, set, not, and, or, lift } from '../src/sync'
import log from './log'

// Test data
const state = {}

const test = message.construct(true, state)

const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

const constant = x => message.extend(() => x)

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

const choice = (check, handlers) => message.extend(input => {
  const value = message.extract(check(input))
  const handler = handlers[value]

  if (handler) {
    return handler(input)
  }

  return undefined
})

const when = (check, success, failure) => message.extend(input => (
  message.extract(check(input))
    ? success(input)
    : failure(input)
))

// Test flows
const testFlow = when(get(''), constant('wow!'), constant('much'))

log(test)
log(testFlow(test))
