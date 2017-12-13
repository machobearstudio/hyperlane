import normalize from './normalize'

const write = (path, value, data) => {
  if (path === '') {
    return value
  }

  const location = normalize(path)
  const copy = { ...data }
  let target = copy
  let i

  for (i = 0; i < location.length - 1; i++) {
    if (target[location[i]] === undefined) {
      target[location[i]] = {}
    } else {
      target[location[i]] = { ...target[location[i]] }
    }

    target = target[location[i]]
  }

  target[location[i]] = value

  return copy
}

export default write
