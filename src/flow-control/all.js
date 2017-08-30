import flatten from 'array-flatten'
import { collect } from '../message'
import callWith from '../utils/call-with'

const all = (...args) => {
  const handlers = flatten(args)

  return input => collect(handlers.map(callWith(input)))
}

export default all
