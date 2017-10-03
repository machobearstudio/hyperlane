import { construct } from '../message'

const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const applicator = func => (...parameters) => input => func(...parameters.map(apply(input)))

export default applicator
