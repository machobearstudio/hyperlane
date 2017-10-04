import { write } from '../path'
import { construct, extract } from '../message'

const set = (location, value, input) =>
  construct(
    input.data,
    write(
      extract(location),
      extract(value),
      input.scope
    )
  )
)

export default set
