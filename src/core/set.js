import { write } from '../path'
import { construct, extract, extend } from '../message'

const set = extend((location, value, object) =>
  construct(
    object.data,
    write(
      extract(location),
      extract(value),
      object.scope
    )
  )
)

export default set
