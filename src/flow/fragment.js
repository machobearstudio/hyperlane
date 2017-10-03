import pipe from 'function-pipe'
import { construct } from '../message'

const identity = x => x

const normalizeArguments = (func, params) => (
  func.arity > params.length ? params.concat([identity]) : params
)

const fragment = func => {
  const Fragment = (...params) => {
    const handler = func(...normalizeArguments(func, params))

    return pipe(construct, handler)
  }

  return Fragment
}

export default fragment
