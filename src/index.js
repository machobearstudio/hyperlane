import * as message from './message'
import getM from './get'
import setM from './set'
import asyncFlow from './async-flow'
import syncFlow from './sync-flow'

let flow = asyncFlow

const configure = conf => {
  if (conf.flow === 'sync') {
    flow = syncFlow
  } else if (conf.flow === 'async') {
    flow = asyncFlow
  } else if (typeof conf.flow === 'function') {
    flow = conf.flow
  }
}

const dynamicFlow = func => (...params) => flow(func)(...params)

const get = dynamicFlow(getM)
const set = dynamicFlow(setM)

const lift = func => flow(message.lift(func))

export { configure, message, get, set, lift }
