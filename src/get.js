import { read } from './path'
import { message, extend, extract, collapse } from './message'

const get = path => extend(input =>
  read(extract(path(input)), collapse(input))
)

export default get
