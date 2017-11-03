import polyFilter from 'poly-filter'
import pipe from 'function-pipe'
import { extract, construct, collect, spread, applicator } from '../message'
import { sequential, parallel, apply, forAll } from '../transport'

const identity = x => x

export const constant = x => () => construct(x)

export const structure = items => sequential([
  parallel(map(resolver, items)),
  collect
])

export const resolver = predicate => {
  if (typeof predicate === 'function') {
    return predicate
  }

  if (typeof predicate !== 'object' || predicate === null) {
    return constant(predicate)
  }

  return structure(predicate)
}

export const when = (condition, yes, no) => input => {
  const original = construct(input)
  const flow = sequential([
    condition,
    x => (extract(x) ? yes(original) : no && no(original))
  ])

  return flow(original)
}

export const map = func => sequential([
  spread,
  forAll(func),
  collect
])

export const filter = func => sequential([
  spread,
  forAll(when(func, identity, () => undefined)),
  polyFilter(x => x !== undefined),
  collect
])

export const chain = (...steps) => sequential(steps)

export const all = (...steps) => sequential([
  parallel(steps),
  collect
])

export const functionCall = func => (...args) => sequential([
  construct,
  parallel(args.concat([identity]).map(resolver)),
  apply(func)
])

export const lift = pipe(applicator, functionCall)

export const pass = x => input => x(input)
