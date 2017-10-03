import map from 'poly-map'
import pipe from 'function-pipe'
import { lift } from './message'
import fragment from './fragment'
import * as core from './core'
import * as essentials from './essentials'
import createFlow from './flow'

const createDictionary = conf => {
  const flow = typeof conf.flow === 'function' ? conf.flow : createFlow(conf.flow)

  return {
    ...map(pipe(flow, fragment), core),
    ...map(pipe(flow, fragment), essentials),
    fragment,
    pipe: fragment,
    flow,
    lift: pipe(lift, flow, fragment)
  }
}

export default createDictionary
