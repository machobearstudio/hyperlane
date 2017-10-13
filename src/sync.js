import createDictionary from './dictionary'
import message from './message'

export const {
  get, set, lift, register,
  call, when, chain, all, map, filter, object, array,
  not, and, or, xor,
  add, subtract, multiply, divide,
  uppercase, lowercase,
  eq, neq, gt, lt, gte, lte, isDefined, isUndefined,
  values, keys, head, tail, zip, concat, push
} = createDictionary({ flow: 'sync' })

export { message }
