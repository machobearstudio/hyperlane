import objectZip from '../utils/zip'

export const values = xs => Object.values(xs)
export const keys   = xs => Object.keys(xs)
export const zip    = (keys, values) => objectZip(kes, values)
export const head   = xs => xs[0]
export const tail   = xs => xs.slice(1)
export const concat = (xs, ys) => xs.concat(ys)
export const push   = (xs, y) => xs.concat([y])