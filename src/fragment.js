import pipe from 'function-pipe'
import { construct } from './message'

const identity = x => x

const resolver = (predicate) => {
  if (typeof predicate === 'function') {
    return predicate
  }

  if (typeof predicate !== 'object' || predicate === null) {
    return () => predicate
  }
}

const apply = input => func => func(input)
const call = (func, args) => input => func(...args.map(apply(input)))

const log = x => { console.log(x); return x }

const fragment = func => {
  const Fragment = (...args) => {
    const parameters = args.map(resolver)
    if (args.length < func.length) {
      parameters.push(identity)
    }

    const Flow = pipe(
      construct,
      call(func, parameters)
    )

    return Flow
  }

  return Fragment
}

export default fragment
