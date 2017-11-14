const scenario = (description, ...cases) => () => Promise
  .all(cases.map(([flow, criterion]) => criterion(flow)))
  .then(x => `${description}: ${x}`)

export default scenario
