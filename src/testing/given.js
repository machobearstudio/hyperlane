import flatten from 'array-flatten'

const foldAnd = xs => xs.reduce((acc, x) => (acc && x), true)

const given = (inputs, check) => flow => Promise
  .all(flatten(inputs).map(check(flow)))
  .then(flatten)
  .then(foldAnd)

export default given
