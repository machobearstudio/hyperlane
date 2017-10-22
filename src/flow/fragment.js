import map from 'poly-map'
import { extend, construct, collect } from '../message'
import { getTransport } from './index'

const constant = x => extend(() => x)

const defragment = func => (func.$name === 'Fragment' ? func() : func)

const structure = items => {
  const resolvers = map(resolver, items)

  return getTransport().sequential([
    construct,
    getTransport().parallel(resolvers),
    collect
  ])
}

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
  const Fragment = (...parms) => func(...parms.map(resolver))
  Fragment.$name = 'Fragment'

  return Fragment
}
