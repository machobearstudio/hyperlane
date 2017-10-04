import map from 'poly-map'
import { lift, extract } from './message'
import * as core from './core'
// import * as essentials from './essentials'
import createFlow from './flow'
import fragment from './fragment'

const createDictionary = conf => {
  const flow =
    typeof conf.flow === 'function'
      ? conf.flow
      : createFlow(conf.flow)

  return {
    ...map(fragment(flow.call), core),
    call: fragment(flow.call)
    // ...map(applicator, essentials),
    // lift: func => applicator(lift(func))
  }
}

export default createDictionary
