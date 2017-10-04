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

const fragment = applicator => func => {
  const Fragment = (...args) => {
    const parameters = args.map(resolver)
    if (args.length < func.length) {
      parameters.push(identity)
    }

    return applicator(func, parameters)
  }

  return Fragment
}

export default fragment
