export const call = (func, args) =>
  input => func(...args.map(x => x(input)))

export const chain = (reducer, funcs) =>
  input => reducer(funcs.reduce((prev, func) => func(prev), input))

export const when = (reducer, [condition, yes, no = () => undefined]) =>
  input => (reducer(condition(input)) ? yes(input) : no(input))
