import { write } from '../path'
import { construct, extract } from '../message'

const setData = (location, value, input) =>
  construct(
    write(
      extract(location),
      extract(value),
      input.data
    ),
    input.scope
  )

export default setData
