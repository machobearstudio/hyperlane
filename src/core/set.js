import { write } from '../path'
import { message } from './message'

const set = (path, value) => (input) => {
  const location = path(input)
  const output = value(input)
  const newScope = write(
    location.data,
    output.data,
    { ...location.scope, ...output.scope }
  )

  return message(input.data, newScope)
}

export default set
