import pipe from 'function-pipe'

const identity = x => x

const normalizeArguments = (arity, params) => (
  arity > params.length ? params.concat([identity]) : params
)

export const isFragment = func => (typeof func === 'function' && func.type !== undefined)

export const fragment = func => {
  const Fragment = (...params) => func(...normalizeArguments(func.arity, params))

  Fragment.type = 'call'

  return Fragment
}
