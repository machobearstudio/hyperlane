import pipe from 'function-pipe'
import { construct } from '../message'
import applyAll from './apply-all'
import normalizeArguments from './normalize-arguments'

const call = func => inputs => func(...inputs)

const applicator = func => (...parameters) => {
  const Applicator = pipe(
    construct,
    applyAll(normalizeArguments(func.arity, parameters)),
    call(func)
  )

  return Applicator
}

export default applicator
