import polyFilter from 'poly-filter'
import { extract, extend, construct, collect, spread, applicator, isMessage } from '../message'
import { fragment } from './fragment'

const identity = x => x
const fixPromise = x => (
  isMessage(x) && x.data instanceof Promise
    ? x.data.then(data => construct(data, x.scope))
    : x
)

let transport = {}

export const getTransport = () => transport

export const setTransport = newTransport => {
  transport = newTransport
}

const sequential = (...args) => getTransport().sequential(...args)
const parallel   = (...args) => getTransport().parallel(...args)
const apply      = (...args) => getTransport().apply(...args)
const call       = (...args) => getTransport().call(...args)
const forAll     = (...args) => getTransport().forAll(...args)

export const when = fragment((condition, yes, no) => input => {
  const original = construct(input)
  const flow = sequential([
    condition,
    fixPromise,
    x => (extract(x) ? yes(original) : no && no(original))
  ])

  return flow(original)
})

export const map = fragment(func => sequential([
  construct,
  spread,
  forAll(func),
  collect
]))

export const filter = fragment(func => sequential([
  construct,
  spread,
  forAll(when(func, identity, () => undefined)),
  polyFilter(x => x !== undefined),
  collect
]))

export const chain = fragment((...steps) => sequential([
  construct,
  ...steps
]))

export const all = fragment((...steps) => sequential([
  construct,
  parallel(steps),
  collect
]))

export const functionCall = func => fragment((...args) => sequential([
  construct,
  parallel(args.concat([identity])),
  apply(func)
]))

export const lift = func => fragment((...args) => sequential([
  construct,
  parallel(args.concat([identity])),
  collect,
  call(applicator(func)),
  fixPromise
]))

export const pass = fragment(x => input => x(input))
