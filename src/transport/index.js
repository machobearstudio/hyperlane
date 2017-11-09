import * as sync from './sync'
import * as async from './async'
import * as bus from './bus'

let transport = {}

const createTransport = type => type === 'sync' ? sync : (type === 'async' ? async : bus)

export const getTransport = () => transport

export const setTransport = (conf) => {
  transport = (typeof conf.transport === 'object'
    ? conf.transport
    : createTransport(conf.transport)
  )
}

export const sequential = (...args) => getTransport().sequential(...args)
export const parallel   = (...args) => getTransport().parallel(...args)
export const apply      = (...args) => getTransport().apply(...args)
export const forAll     = (...args) => getTransport().forAll(...args)
