export const call = (func, args) =>
  input => func(...args.map(x => x(input)))

export const chain = (wrap, funcs) =>
  input => wrap(funcs.reduce((prev, func) => func(prev), input))

export const when = (extract, [condition, yes, no = () => undefined]) =>
  input => (extract(condition(input)) ? yes(input) : no(input))
