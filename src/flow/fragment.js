import map from 'poly-map'
import { construct, collect } from '../message'
import { sequential, parallel } from '../transport'

const defragment = func => (func.$class === 'Fragment' ? func() : func)

export const constant = x => () => construct(x)

export const structure = items => sequential([
  parallel(map(resolver, items)),
  collect
])

const resolver = predicate => {
  if (typeof predicate === 'function') {
    return defragment(predicate)
  }

  if (typeof predicate !== 'object' || predicate === null) {
    return constant(predicate)
  }

  return structure(predicate)
}

export const fragment = func => {
  const Fragment = (...params) => {
    const handler = func(...params.map(resolver))
    const Step = input => handler(construct(input))
    Step.$class = 'Step'
    Step.$params = params

    return Step
  }

  Fragment.$class = 'Fragment'

  return Fragment
}
