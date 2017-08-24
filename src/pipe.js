import flatten from 'array-flatten'
import callWith from './utils/call-with'

const pipe = (...args) => {
  const handlers = flatten(args)

  return input => handlers.reduce(callWith, input)
}

export default pipe
