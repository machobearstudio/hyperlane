import constant from './constant'
import { isMessage } from './core'

const autoConstants = func => (...args) => {
  if (isMessage(args[0])) {
    return func(...args)
  }

  return func(
    ...args.map(arg => (
      typeof arg !== 'function' ? constant(arg) : arg
    ))
  )
}

export default autoConstants
