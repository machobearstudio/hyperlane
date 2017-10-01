import normalize from './normalize'

const write = (path, value, data) => {
  const location = normalize(path)
  let target = data
  let i

  for (i = 0; i < location.length - 1; i++) {
    if (target[location[i]] === undefined) {
      target[location[i]] = {}
    }

    target = target[location[i]]
  }

  target[location[i]] = value

  return data
}

export default write
