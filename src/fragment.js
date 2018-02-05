import polyMap from 'poly-map'
import { construct, isInstance as isStore, extend } from './store'
import { collect } from './state'
import { sequential, parallel } from './transport'

const constant = x => extend(() => x)

const structure = items => sequential([ parallel(polyMap(resolver, items)), collect ])

const resolver = predicate => {
  if (typeof predicate === 'function') {
    return predicate
  }

  if (typeof predicate !== 'object' || predicate === null) {
    return constant(predicate)
  }

  return structure(predicate)
}

const fragment = func => {
  const Fragment = (...args) => {
    if (isStore(args[0])) {
      return func()(args[0])
    }

    const Flow = func(...args
      .map(resolver)
      .map(f => (f.$class === 'Fragment' ? f() : f))
    )

    return Flow
  }

  Fragment.$class = 'Fragment'

  return Fragment
}

export default fragment;
