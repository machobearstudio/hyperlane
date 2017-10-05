import curry from 'curry'
import { extend, spread } from './message'

const resolver = predicate => {
  if (typeof predicate === 'function') {
    return predicate
  }

  if (typeof predicate !== 'object' || predicate === null) {
    return extend(() => predicate)
  }
}

export const fragment = func => {
  const Fragment = (...parms) => func(...parms.map(resolver))
  Fragment.$name = 'Fragment'

  return Fragment
}

export const defragment = func => (func.$name === 'Fragment' ? func() : func)
