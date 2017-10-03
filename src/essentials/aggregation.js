import { lift, extend } from '../message'

export const constant = lift(x => x)
export const all = lift((...args) => args)
