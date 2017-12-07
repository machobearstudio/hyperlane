import polyFilter from 'poly-filter'
import pipe from 'function-pipe'
import { extract, construct, combine } from './message'
import { collect, spread } from './state'
import { sequential, parallel, apply, forAll } from './transport'

const identity = x => x

export const when = (condition, yes, no = identity) => input => {
  const original = construct(input)
  const branch = x => (extract(x) ? yes(original) : no(original))
  const flow = sequential([ condition, branch ])

  return flow(original)
}

export const either = (left, right) => input => {
  const original = construct(input)
  const branch = x => (extract(x) === undefined ? right(original) : x)
  const flow = sequential([ left, branch ])

  return flow(original)
}

export const map = (func, iterator = identity) => sequential([
  iterator,
  spread,
  forAll(func),
  collect
])

export const filter = (func, iterator = identity) => sequential([
  iterator,
  spread,
  forAll(when(func, identity, () => undefined)),
  polyFilter(x => x !== undefined),
  collect
])

export const chain = (...steps) => sequential(steps)

export const all = (...steps) => sequential([ parallel(steps), collect ])

export const functionCall = func => (...args) => sequential([
  construct,
  parallel(args.concat([identity])),
  apply(func)
])
