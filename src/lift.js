import all from './all'
import apply from './apply'
import { isMessage } from './message'

const identity = x => x

const lift = func => (...args) => {
  var applicator = apply(func)

  if (isMessage(args[0])) {
    return applicator(...args)
  }

  var collector = args.length ? all(...args) : identity

  return input => applicator(collector(input))
}

export default lift
