const verify = (...constraints) => flow => input => Promise
  .all([input, flow(input)])
  .then(results => constraints.map(f => f(...results)))

export default verify
