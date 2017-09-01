import { write } from './path'
import { construct, lift } from './message'

const set = lift((location, value, object) =>
  construct(undefined, write(location, value, {}))
)

export default set
