import pipe from 'function-pipe'
import { construct } from '../message'

const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const applyAll = xs => input => xs.map(apply(input))

export default applyAll
