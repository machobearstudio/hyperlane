import * as sync from './sync'
import * as async from './async'

const flow = type => type === 'sync' ? sync : async

export default flow
