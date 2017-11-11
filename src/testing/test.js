import flatten from 'array-flatten'

const foldAnd = xs => xs.reduce((acc, x) => acc && x, true)

const test = (inputs, check) => flow => Promise
  .all(inputs.map(check(flow)))
  .then(flatten)
  .then(foldAnd)

export default test
