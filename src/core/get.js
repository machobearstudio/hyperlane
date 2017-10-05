import { read } from '../path'
import { construct, extract } from '../message'

const get = (location, data) => {
  const path = extract(location)
  const input = construct(data)

  if (path === '') {
    return input
  }

  let value = read(path, input.data)
  if (value === undefined) {
    value = read(path, input.scope)
  }

  return construct(value, input.scope)
}

export default get
