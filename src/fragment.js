import polyMap from 'poly-map'
import { construct, isInstance, extend } from './store'
import { collect } from './state'
import { sequential, parallel } from './transport'

const constant = x => extend(() => x)

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
  const Fragment = (...args) => (
    isInstance(args[0])
      ? func()(args[0])
      : func(...args.map(resolver))
  )

  Fragment.$class = 'Fragment'

  return Fragment
}

export default fragment;
