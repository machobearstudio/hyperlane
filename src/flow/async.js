export const call = (func, args) =>
  input => Promise.resolve(input)
    .then(x => Promise.all(args.map(arg => arg(x))))
    .then(argValues => func(...argValues))

export const chain = (reducer, funcs) =>
  input => reducer(funcs.reduce((prev, func) => func(prev), input))

export const when = (reducer, [condition, yes, no = () => undefined]) =>
  input => (reducer(condition(input)) ? yes(input) : no(input))
