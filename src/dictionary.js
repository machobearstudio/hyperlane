import map from 'poly-map'
import { lift, extract } from './message'
import * as core from './core'
// import * as essentials from './essentials'
// import builtInApplicator from './applicator'
import fragment from './fragment'

const createDictionary = conf => {
  // const applicator =
  //   typeof conf.flow === 'function'
  //     ? conf.flow
  //     : builtInApplicator(conf.flow)

  return {
    ...map(fragment, core),
    // ...map(applicator, essentials),
    // lift: func => applicator(lift(func))
  }
}

export default createDictionary
