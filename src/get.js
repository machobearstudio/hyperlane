import { read } from './path'
import { message, extend, extract } from './message'

const get = path => extend((input) => {
  const location = extract(path(input))

  let value = read(location, input.data)
  if (value === undefined) {
    value = read(location, input.scope)
  }

  return value
})

export default get
