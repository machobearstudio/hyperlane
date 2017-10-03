import { lift } from '../message'

export const not = lift(x => !x)
export const and = lift((x, y) => x && y)
export const or = lift((x, y) => x || y)
export const xor = lift((x, y) => (x || y) && !(x && y))
