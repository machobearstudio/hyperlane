import normalize from './normalize'

const write = (path, value, data) => {
  if (path === '') {
    return value
  }

  const location = normalize(path)
  let target = { ...data }
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

  return target
}

export default write
