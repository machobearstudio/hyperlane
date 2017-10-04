import { read } from '../path'
import { construct, extract } from '../message'

const get = (location, input) => {
  const path = extract(location)

  if (path === '') {
    return input.data
  }

  let value = read(path, input.data)
  if (value === undefined) {
    value = read(path, input.scope)
  }

  return construct(value, input.scope)
}

export default get
