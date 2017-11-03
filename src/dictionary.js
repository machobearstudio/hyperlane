import * as flow from './flow'
import * as core from './core'
import * as essentials from './essentials'

export const lift   = flow.lift
export const chain  = flow.chain
export const all    = flow.all
export const call   = flow.functionCall
export const pass   = flow.pass
export const when   = flow.when
export const map    = flow.map
export const filter = flow.filter

export const get         = flow.functionCall(core.get)
export const set         = flow.functionCall(core.set)

export const not         = flow.lift(essentials.not)
export const and         = flow.lift(essentials.and)
export const or          = flow.lift(essentials.or)
export const xor         = flow.lift(essentials.xor)
export const add         = flow.lift(essentials.add)
export const subtract    = flow.lift(essentials.subtract)
export const multiply    = flow.lift(essentials.multiply)
export const divide      = flow.lift(essentials.divide)
export const uppercase   = flow.lift(essentials.uppercase)
export const lowercase   = flow.lift(essentials.lowercase)
export const join        = flow.lift(essentials.join)
export const split       = flow.lift(essentials.split)
export const eq          = flow.lift(essentials.eq)
export const neq         = flow.lift(essentials.neq)
export const gt          = flow.lift(essentials.gt)
export const lt          = flow.lift(essentials.lt)
export const gte         = flow.lift(essentials.gte)
export const lte         = flow.lift(essentials.lte)
export const isDefined   = flow.lift(essentials.isDefined)
export const isUndefined = flow.lift(essentials.isUndefined)
export const values      = flow.lift(essentials.values)
export const keys        = flow.lift(essentials.keys)
export const head        = flow.lift(essentials.head)
export const tail        = flow.lift(essentials.tail)
export const zip         = flow.lift(essentials.zip)
export const concat      = flow.lift(essentials.concat)
export const push        = flow.lift(essentials.push)
