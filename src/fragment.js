import curry from 'curry'
import pipe from 'function-pipe'

const identity = x => x

const resolver = predicate => {
  if (typeof predicate === 'function') {
    return predicate
  }

  if (typeof predicate !== 'object' || predicate === null) {
    return () => predicate
  }
}

const fragment = (applicator, reducer) => {
  const Fragment = (...args) => {
    const parameters = args.map(resolver)
    if (args.length < reducer.length) {
      parameters.push(identity)
    }

    return applicator(reducer, parameters)
  }

  return Fragment
}

export default curry(fragment)
