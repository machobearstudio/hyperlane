const chain = (reducer, funcs) => input => (
  reducer(funcs.reduce((prev, func) => func(prev), input))
)

export default chain
