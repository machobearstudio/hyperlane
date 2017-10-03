import map from 'poly-map'
import pipe from 'function-pipe'
import { lift } from './message'
import * as core from './core'
import * as essentials from './essentials'
import createFlow from './flow'

const createDictionary = conf => {
  const flow = typeof conf.flow === 'function' ? conf.flow : createFlow(conf.flow)

  return {
    ...map(flow, core),
    ...map(flow, essentials),
    fragment: flow,
    lift: pipe(lift, flow)
  }
}

export default createDictionary
