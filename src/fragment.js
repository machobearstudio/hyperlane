import polyMap from 'poly-map'
import { extract, construct, collect, spread, applicator } from './message'
import { sequential, parallel } from './transport'

const constant = x => () => construct(x)

const structure = items => sequential([ parallel(polyMap(resolver, items)), collect ])

const resolver = predicate => {
  if (typeof predicate === 'function') {
    return (predicate.$class === 'Fragment' ? predicate() : predicate)
  }

  if (typeof predicate !== 'object' || predicate === null) {
    return constant(predicate)
  }

  return structure(predicate)
}

const fragment = func => {
  const Fragment = (...args) => func(...args.map(resolver))
  Fragment.$class = 'Fragment'

  return Fragment
}

export default fragment;
