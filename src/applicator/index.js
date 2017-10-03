import sync from './sync'
import async from './async'

const createApplicator = flowProvider => func => {
  const handler = flowProvider(func)
  handler.arity = func.arity !== undefined ? func.arity : func.length

  return handler
}

const applicator = type => createApplicator(type === 'sync' ? sync : async)

export default applicator
