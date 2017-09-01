import { construct } from '../message'

const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const wrapPromise = input => {
  const inputMessage = construct(input)

  if (inputMessage.data instanceof Promise) {
    return inputMessage.data.next(construct)
  }

  return Promise.resolve(inputMessage)
}

const flow = func => (...parameters) => input =>
  wrapPromise(input)
  .then(x => Promise.all(parameters.map(apply(x))))
  .then(params => func(...params, input))

export default flow
