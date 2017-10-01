import { lift } from '../message'

export const not = lift(x => !x)
export const and = lift((...xs) => xs.reduce((acc, next) => acc && next, true))
export const or = lift((...xs) => xs.reduce((acc, next) => acc || next, false))
