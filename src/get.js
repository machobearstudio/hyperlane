import { read } from './path'
import { message } from './message'

const get = path => (input) => {
  const location = path(input)
  const value = read(
    location.data,
    { ...location.scope, ...input.data }
  )

  return message(value, location.scope)
}

export default get
