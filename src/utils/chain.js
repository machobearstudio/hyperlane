import flatten from 'array-flatten'
import callWith from '../utils/call-with'

const chain = (...args) => input => flatten(args).reduce(
  (prev, handler) => prev.then(handler),
  Promise.resolve(input)
)

export default chain
