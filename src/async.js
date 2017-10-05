import createDictionary from './dictionary'
import * as message from './message'

export const {
  get, set, lift, register,
  call, when, chain, all, map,
  not, and, or, xor,
  add, subtract, multiply, divide,
  eq, neq, gt, lt, gte, lte, isDefined, isUndefined
} = createDictionary({ flow: 'async' })

export { message }
