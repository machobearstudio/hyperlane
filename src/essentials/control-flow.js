import { lift } from '../message'

export const all = lift((...args) => args)
