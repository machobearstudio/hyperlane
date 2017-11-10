import { read } from '../path'
import { construct, extract } from '../message'

const getData = (location, input) => {
  const path = extract(location)
  if (path === '') {
    return input
  }

  return construct(read(path, input.data), input.scope)
}

export default getData
