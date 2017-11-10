import { read } from '../path'
import { construct, extract } from '../message'

const getScope = (location, input) => {
  const path = extract(location)
  if (path === '') {
    return input
  }

  return construct(read(path, input.scope), input.scope)
}

export default getScope
