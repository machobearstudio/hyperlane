import polyFilter from 'poly-filter'
import pipe from 'function-pipe'
import { extract, construct, collect, spread, applicator } from '../message'
import { sequential, parallel, apply, forAll } from '../transport'
import { fragment, resolver } from './fragment'

const identity = x => x

const log = x => { console.log('boooooo', x); return x }

export const when = fragment((condition, yes, no) => input => {
  const original = construct(input)
  const flow = sequential([
    condition,
    x => (extract(x) ? yes(original) : no && no(original))
  ])

  return flow(original)
})

export const map = fragment(func => sequential([
  spread,
  forAll(func),
  collect
]))

export const filter = fragment(func => sequential([
  spread,
  forAll(when(func, identity, () => undefined)),
  polyFilter(x => x !== undefined),
  collect
]))

export const chain = fragment((...steps) => sequential(steps))

export const all = fragment((...steps) => sequential([
  parallel(steps),
  collect
]))

export const functionCall = func => fragment((...args) => sequential([
  parallel(args.concat([identity])),
  apply(func)
]))

export const lift = pipe(applicator, functionCall)

export const pass = fragment(x => input => x(input))
