import flatten from 'array-flatten'

const normalize = location => {
  if (typeof location === 'string') {
    return location.split('.')
  }

  if (location instanceof Array) {
    return flatten(location).join('.').split('.')
  }

  throw new Error('Incorrect location type: ' + location)
}

export default normalize
