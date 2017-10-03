import { construct } from '../message'

const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const wrapPromise = input => {
  if (input.data instanceof Promise) {
    return input.data
  }

  return Promise.resolve(input)
}

const applicator = func => (...parameters) => {
  const Applicator = input =>
    wrapPromise(construct(input))
      .then(x => Promise.all(parameters.map(apply(x))))
      .then(params => func(...params))

  return Applicator
}

export default applicator
