import curry from 'curry'
import { extend } from './message'

const identity = x => x

const resolver = predicate => {
  if (typeof predicate === 'function') {
    return predicate
  }

  if (typeof predicate !== 'object' || predicate === null) {
    return extend(() => predicate)
  }
}

const fragment = (applicator, reducer) => {
  const Fragment = (...args) =>
    applicator(reducer, args.map(resolver).concat([identity]))

  return Fragment
}

export default curry(fragment)
