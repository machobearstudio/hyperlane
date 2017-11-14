const assert = (...constraints) => flow => input => Promise
  .all([input, flow(input)])
  .then(results => constraints.map(f => f(...results)))

export default assert
