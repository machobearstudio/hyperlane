import { maybe1, maybe2 } from './maybe'

export const uppercase = maybe1(x => String(x).toUpperCase())
export const lowercase = maybe1(x => String(x).toLowerCase())
export const split     = maybe2((x, y) => String(y).split(x))
