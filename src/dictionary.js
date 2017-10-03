import map from 'poly-map'
import pipe from 'function-pipe'
import { lift, extract } from './message'
import { isFragment, fragment } from './fragment'
import * as core from './core'
import * as essentials from './essentials'
import builtInApplicator from './applicator'

const createDictionary = conf => {
  const applicator =
    typeof conf.flow === 'function'
      ? conf.flow
      : builtInApplicator(conf.flow)

  return {
    ...map(pipe(applicator, fragment), core),
    ...map(pipe(applicator, fragment), essentials),
    lift: pipe(lift, applicator, fragment)
  }
}

export default createDictionary
