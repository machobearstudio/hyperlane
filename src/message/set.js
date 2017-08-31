import { write } from '../path'
import { construct, extend, extract } from './message'

const set = extend((location, value, object) =>
  construct(
    undefined,
    write(extract(location), extract(value), object.scope)
  )
)

export default set
