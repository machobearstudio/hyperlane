import curry from 'curry'
import equal from 'deep-equal'

const assert = (given, expected, flow) => Promise
  .resolve(flow(given))
  .then(result => ({
    success: equal(result, expected)
  }))

export default curry(assert)
