import { construct } from '../message'

const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const flow = func => (...parameters) => input =>
  func(...parameters.map(apply(input)), input)

export default flow
