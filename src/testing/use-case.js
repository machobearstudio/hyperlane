const summarize = results => results.reduce((acc, { success }) => {
  acc[(success ? 'passed' : 'failed')]++
  return acc
}, { passed: 0, failed: 0 })

const useCase = (description, flow, ...assertions) => () => Promise
  .all(assertions.map(assertion => assertion(flow)))
  .then(summarize)
  .then(summary => ({
    description,
    success: summary.failed === 0,
    ...summary
  }))

export default useCase
