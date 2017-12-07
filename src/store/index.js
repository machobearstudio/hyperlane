import * as simpleMessage from './message'

let store = simpleMessage

const createStore = type => simpleMessage

export const getStore = () => store

export const setStore = (conf) => {
  store = (typeof conf.store === 'object'
    ? conf.store
    : createStore(conf.store)
  )
}

export const isInstance = (...args) => getStore().isInstance(...args)
export const construct  = (...args) => getStore().construct(...args)
export const extract    = (...args) => getStore().extract(...args)
export const extend     = (...args) => getStore().extend(...args)
export const combine    = (...args) => getStore().combine(...args)
export const get        = (...args) => getStore().get(...args)
export const set        = (...args) => getStore().set(...args)

const message = construct
message.isInstance = isInstance
message.construct = construct
message.extract = extract
message.extend = extend
message.combine = combine
message.get = get
message.set = set

export { message }
