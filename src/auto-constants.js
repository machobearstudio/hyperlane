import constant from './constant'
import { isMessage } from './core'

const autoConstants = func => (...args) => {
  if (isMessage(args[0])) {
    return func(...args)
  }

  return func(
    ...args.map(arg => (
      typeof arg === 'function' ? arg : constant(arg)
    ))
  )
}

export default autoConstants
