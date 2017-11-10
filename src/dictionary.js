import pipe from 'function-pipe'
import * as flow from './flow'
import * as core from './core'
import * as essentials from './essentials'
import fragment from './fragment'

export const lift   = pipe(flow.lift, fragment)

export const chain  = fragment(flow.chain)
export const all    = fragment(flow.all)
export const call   = fragment(flow.functionCall)
export const when   = fragment(flow.when)
export const map    = fragment(flow.map)
export const filter = fragment(flow.filter)

export const get         = fragment(flow.functionCall(core.get))
export const set         = fragment(flow.functionCall(core.set))

export const not         = fragment(flow.lift(essentials.not))
export const and         = fragment(flow.lift(essentials.and))
export const or          = fragment(flow.lift(essentials.or))
export const xor         = fragment(flow.lift(essentials.xor))
export const add         = fragment(flow.lift(essentials.add))
export const subtract    = fragment(flow.lift(essentials.subtract))
export const multiply    = fragment(flow.lift(essentials.multiply))
export const divide      = fragment(flow.lift(essentials.divide))
export const uppercase   = fragment(flow.lift(essentials.uppercase))
export const lowercase   = fragment(flow.lift(essentials.lowercase))
export const join        = fragment(flow.lift(essentials.join))
export const split       = fragment(flow.lift(essentials.split))
export const eq          = fragment(flow.lift(essentials.eq))
export const neq         = fragment(flow.lift(essentials.neq))
export const gt          = fragment(flow.lift(essentials.gt))
export const lt          = fragment(flow.lift(essentials.lt))
export const gte         = fragment(flow.lift(essentials.gte))
export const lte         = fragment(flow.lift(essentials.lte))
export const isDefined   = fragment(flow.lift(essentials.isDefined))
export const isUndefined = fragment(flow.lift(essentials.isUndefined))
export const values      = fragment(flow.lift(essentials.values))
export const keys        = fragment(flow.lift(essentials.keys))
export const head        = fragment(flow.lift(essentials.head))
export const tail        = fragment(flow.lift(essentials.tail))
export const zip         = fragment(flow.lift(essentials.zip))
export const concat      = fragment(flow.lift(essentials.concat))
export const push        = fragment(flow.lift(essentials.push))
