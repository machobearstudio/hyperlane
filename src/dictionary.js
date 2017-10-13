import polyMap from 'poly-map'
import pipe from 'function-pipe';
import { extract, construct, collect, spread, combine, applicator, isMessage } from './message'
import * as core from './core'
import * as essentials from './essentials'
import createFlow from './flow'
import { fragment, defragment } from './fragment'

const createDictionary = (conf) => {
  const flow = createFlow(conf.flow || conf.transport)
  const { functionCall, liftCall, when, iterate, filter, chain, all, structure } = flow

  return {
    lift: pipe(liftCall, fragment),
    chain: fragment((...steps) => chain(...steps.map(defragment))),
    all: fragment((...steps) => all(...steps.map(defragment))),
    array: fragment((...steps) => all(...steps.map(defragment))),
    object: fragment(items => structure(items)),
    when: fragment((...steps) => when(...steps.map(defragment))),
    map: fragment(func => iterate(defragment(func))),
    filter: fragment(func => filter(defragment(func))),
    ...polyMap(pipe(functionCall, fragment), core),
    ...polyMap(pipe(liftCall, fragment), essentials),
  }
}

export default createDictionary
