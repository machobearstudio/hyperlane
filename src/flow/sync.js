import { construct } from '../message'

const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const flow = func => (...parameters) => input => (
  func.arity > parameters.length
    ? func(...parameters.map(apply(input)), input)
    : func(...parameters.map(apply(input)))
)

export default flow
