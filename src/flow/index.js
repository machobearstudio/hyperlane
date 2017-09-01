const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const flow = func => (...parameters) => input => Promise
  .resolve(input)
  .then(x => Promise.all(parameters.map(apply(x))))
  .then(params => func(...params, input))
  .catch(e => console.log(e))

export default flow
