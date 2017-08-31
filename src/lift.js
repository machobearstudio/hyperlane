import { isMessage, apply, fmap } from './message'
import chain from './utils/chain'
import all from './flow-control/all'

const lift = func => (...args) => (
  isMessage(args[0])
    ? fmap(func)(args[0])
    : chain(all(args), apply(func))
)

export default lift
