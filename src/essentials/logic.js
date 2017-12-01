import { maybe1, maybe2 } from './maybe'

export const not = maybe1(x => !x)
export const and = maybe2((x, y) => x && y)
export const or  = maybe2((x, y) => x || y)
export const xor = maybe2((x, y) => (x || y) && !(x && y))
