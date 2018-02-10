import { isInstance as isStore } from './store'
import structure from './structure'

const fragment = func => {
  const Fragment = (...args) => {
    if (isStore(args[0])) {
      return func()(args[0])
    }

    const Flow = func(...args
      .map(structure)
      .map(f => (f.$class === 'Fragment' ? f() : f))
    )

    return Flow
  }

  Fragment.$class = 'Fragment'

  return Fragment
}

export default fragment;
