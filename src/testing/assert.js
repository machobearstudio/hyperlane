const assert = (...constraints) => flow => input => Promise
  .resolve(flow(input))
  .then(output => constraints.map(f => f(input, output)))

export default assert
