import map from 'poly-map'
import * as core from './core'
import * as essentials from './essentials'
import * as message from './message'
import * as builtInFlows from './flow'

const createDictionary = conf => {
  const flowProvider = (
    typeof conf.flow === 'function'
      ? conf.flow
      : builtInFlows[conf.flow]
  )

  const flow = func => (...params) => flowProvider(func)(...params)

  return {
    ...map(flow, core),
    ...map(flow, essentials),
    lift: func => flow(message.lift(func))
  }
}

export default createDictionary
