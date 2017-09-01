import * as message from './message'
import * as builtInFlows from './flow'
import getM from './get'
import setM from './set'

let flow = builtInFlows.async

const configure = conf => {
  if (typeof conf.flow === 'function') {
    flow = conf.flow
  } else {
    flow = builtInFlows[conf.flow]
  }
}

const dynamicFlow = func => (...params) => flow(func)(...params)

const get = dynamicFlow(getM)
const set = dynamicFlow(setM)

const lift = func => flow(message.lift(func))

export { configure, message, get, set, lift }
