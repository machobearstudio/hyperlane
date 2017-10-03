import pipe from 'function-pipe'
import fragment from './fragment'

import sync from './sync'
import async from './async'

const createApplicator = flowProvider => func => {
  const handler = flowProvider(func)
  handler.arity = func.arity !== undefined ? func.arity : func.length

  return handler
}

const createFlow = type => pipe(
  createApplicator(type === 'sync' ? sync : async),
  fragment
)

export default createFlow
