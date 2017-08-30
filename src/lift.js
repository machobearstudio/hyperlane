import { isMessage, apply } from './message'

const lift = func => (...args) => {
  var applicator = apply(func)

  if (isMessage(args[0])) {
    return applicator(args[0])
  }

  var collector = input => (args.length
      ? args.map(arg => arg(input))
      : [input]
  )

  return input => {
    return applicator(...collector(input))
  }
}

export default lift
