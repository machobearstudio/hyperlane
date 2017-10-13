import polyFilter from 'poly-filter'
import { extract, construct, collect, spread, applicator, isMessage } from './message'
import createTransport from './transport'

const identity = x => x
const fixPromise = x => (
  isMessage(x) && x.data instanceof Promise
    ? x.data.then(data => construct(data, x.scope))
    : x
)

const createFlow = (config) => {
  const transport = typeof config === 'object' ? config : createTransport(config)
  const { sequential, parallel, apply, call, forAll } = transport

  const functionCall = func => (...args) => sequential([
    construct,
    parallel(args.concat([identity])),
    apply(func)
  ])

  const liftCall = func => (...args) => sequential([
    construct,
    parallel(args.concat([identity])),
    collect,
    call(applicator(func)),
    fixPromise
  ])

  const when = (condition, yes, no) => input => {
    const original = construct(input)

    return sequential([
      condition,
      fixPromise,
      x => (extract(x) ? yes(original) : no && no(original))
    ])(original)
  }

  const iterate = func => sequential([
    construct,
    spread,
    forAll(func),
    collect
  ])

  const filter = func => sequential([
    construct,
    spread,
    forAll(when(func, identity, () => undefined)),
    polyFilter(x => x !== undefined),
    collect
  ])

  const chain = (...steps) => sequential([
    construct,
    ...steps
  ])

  const all = (...steps) => sequential([
    construct,
    parallel(steps),
    collect
  ])

  const structure = items => sequential([
    construct,
    parallel(items),
    collect
  ])

  return { functionCall, liftCall, when, iterate, filter, chain, all, structure }
}

export default createFlow
