import { isMessage, apply } from './message'
import all from './flow-control/all'
import chain from './flow-control/chain'

const lift = func => {
  const applicator = apply(func)

  return  (...args) => (
    isMessage(args[0])
      ? applicator(args[0])
      : chain(all(args), applicator)
  )
}

export default lift
