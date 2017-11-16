import { maybe2 } from './maybe'

export const add      = maybe2((x, y) => x + y)
export const subtract = maybe2((x, y) => x - y)
export const multiply = maybe2((x, y) => x * y)
export const divide   = maybe2((x, y) => x / y)
