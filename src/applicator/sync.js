import { construct } from '../message'

const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const applicator = func => (...parameters) => {
  const Applicator = input => func(...parameters.map(apply(construct(input))))

  return Applicator
}

export default applicator
