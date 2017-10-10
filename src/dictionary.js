import polyMap from 'poly-map'
import pipe from 'function-pipe'
import { extract, construct, collect, spread, combine, applicator, isMessage } from './message'
import * as core from './core'
import * as essentials from './essentials'
import createFlow from './flow'
import { fragment, defragment } from './fragment'

const id = x => x
const fixPromise = x => (
  isMessage(x) && x.data instanceof Promise
    ? x.data.then(data => construct(data, x.scope))
    : x
)

const createDictionary = (conf) => {
  const flow = typeof conf.flow === 'object' ? conf.flow : createFlow(conf.flow)
  const { sequential, parallel, apply, call, map } = flow

  const functionCall = func => (...args) => sequential([
    construct,
    parallel(args.concat([id])),
    apply(func)
  ])

  const liftCall = func => (...args) => sequential([
    construct,
    parallel(args.concat([id])),
    collect,
    call(applicator(func)),
    fixPromise
  ])

  const when = (condition, yes, no) => input => (extract(condition(input)) ? yes(input) : (no && no(input)))

  const iterate = func => sequential([ construct, spread, map(func), collect ])

  return {
    ...polyMap(pipe(functionCall, fragment), core),
    ...polyMap(pipe(liftCall, fragment), essentials),
    lift: pipe(liftCall, fragment),
    chain: fragment((...steps) => sequential(steps.map(defragment))),
    all: fragment((...steps) => sequential([parallel(steps.map(defragment)), collect])),
    when: fragment(when),
    map: fragment(func => iterate(defragment(func)))
  }
}

export default createDictionary
