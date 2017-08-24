import flatten from 'array-flatten'
import { message } from './message'
import callWith from './utils/call-with'

const collect = messages => messages.reduce(
  (acc, next) => {
    acc.data.push(next.data)
    acc.scope = { ...acc.scope, ...next.scope }

    return acc
  }, message([])
)

const all = (...args) => {
  const handlers = flatten(args)

  return input => collect(handlers.map(callWith(input)))
}

export default all
