import * as sync from './sync'
import * as async from './async'

const createTransport = type => type === 'sync' ? sync : async

export default createTransport
