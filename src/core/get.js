import { read } from '../path'
import { extend, extract } from '../message'

const get = extend((location, object) => {
  const path = extract(location)

  if (path === '') {
    return object.data
  }

  let value = read(path, object.data)
  if (value === undefined) {
    value = read(path, object.scope)
  }

  return value
})

export default get
