import { lift } from '../message'

export const add = lift((x, y) => x + y)
export const subtract = lift((x, y) => x - y)
export const multiply = lift((x, y) => x * y)
export const divide = lift((x, y) => x / y)
