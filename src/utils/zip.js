import curry from 'curry'

const zip = (keys, values) => {
  let i = 0;
  const acc = {}

  for (; i < keys.length; i++) {
    acc[keys[i]] = values[i]
  }

  return acc
}

export default curry(zip)