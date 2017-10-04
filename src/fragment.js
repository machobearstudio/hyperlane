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

export const fragment = curry((applicator, reducer) => {
  const Fragment = (...args) => {
    const parameters = args.map(resolver)
    if (args.length === 0 || args.length < reducer.length) {
      parameters.push(identity)
    }

    return applicator(reducer, parameters)
  }

  return Fragment
})

export const defragment = func => (func.name === 'Fragment' ? func() : func)
