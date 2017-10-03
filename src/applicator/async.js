import { construct } from '../message'
import applyAll from './apply-all'
import normalizeArguments from './normalize-arguments'

const message = (input) => {
  if (input instanceof Promise) {
    return input.then(message)
  }

  if (input.data instanceof Promise) {
    return input.data.then(data => construct(data, input.scope))
  }

  return Promise.resolve(input)
}

const call = func => inputs => Promise.all(inputs.map(message)).then(xs => func(...xs))

const applicator = func => (...parameters) => {
  const Applicator = input =>
    message(input)
      .then(applyAll(normalizeArguments(func.arity, parameters)))
      .then(call(func))

  return Applicator
}

export default applicator
