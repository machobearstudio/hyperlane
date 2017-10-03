import pipe from 'function-pipe'

const identity = x => x

const normalizeArguments = (func, params) => (
  func.arity > params.length ? params.concat([identity]) : params
)

const isFragment = func => typeof func === 'function' && func.type !== undefined

const fragment = (...funcs) => {
  if (funcs.length > 1) {
    return pipe(funcs.map(func => isFragment(func) ? func() : func))
  }

  const func = funcs[0]
  const Fragment = (...params) => func(...normalizeArguments(func, params))

  Fragment.type = 'fragment'

  return Fragment
}

export default fragment
