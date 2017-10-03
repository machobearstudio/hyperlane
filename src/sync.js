import * as message from './message'
import createDictionary from './dictionary'

const dictionary = createDictionary({
  flow: 'sync'
})

export const {
  get, set, lift, not, and, or, xor,
  add, subtract, multiply, divide,
  eq, neq, gt, lt, gte, lte, isDefined, isUndefined
} = dictionary

export { message, createDictionary }

export default dictionary