import { lift } from '../message'

export const eq = lift((x, y) => x === y)
export const neq = lift((x, y) => x !== y)
export const gt = lift((x, y) => x > y)
export const lt = lift((x, y) => x < y)
export const gte = lift((x, y) => x >= y)
export const lte = lift((x, y) => x <= y)
export const isDefined = lift(x => x !== undefined)
export const isUndefined = lift(x => x === undefined)
