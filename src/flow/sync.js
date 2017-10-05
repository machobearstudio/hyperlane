import map from 'poly-map'
import { spread, collect } from '../message'

export const call = (func, args) =>
  input => func(...args.map(x => x(input)))

export const chain = (normalize, funcs) =>
  input => normalize(funcs).reduce((prev, func) => func(prev), input)

export const when = (extract, [condition, yes, no = () => undefined]) =>
  input => (extract(condition(input)) ? yes(input) : no(input))

export const all = (collect, funcs) =>
  input => collect(funcs.map(func => func(input)))
