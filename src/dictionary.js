import map from 'poly-map'
import pipe from 'function-pipe'
import { lift, extract, construct } from './message'
import * as core from './core'
import * as essentials from './essentials'
import createFlow from './flow'
import fragment from './fragment'

const createDictionary = conf => {
  const flow =
    typeof conf.flow === 'function'
      ? conf.flow
      : createFlow(conf.flow)

  return {
    ...map(fragment(flow.call), core),
    ...map(fragment(flow.call), essentials),
    call: fragment(flow.call),
    when: fragment(flow.when, extract),
    chain: fragment(flow.chain, construct),
    lift: pipe(lift, fragment(flow.call))
  }
}

export default createDictionary
