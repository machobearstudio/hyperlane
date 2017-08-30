import autoConstants from './auto-constants'
import liftToMessage from './lift'
import constant from './constant'
import { message, extract, extend, apply } from './message'
import pureGet from './get'
import pureSet from './set'
import pureAll from './flow-control/all'
import pureWhen from './flow-control/when'
import pureChoice from './flow-control/choice'
import pureChain from './flow-control/chain'

const get = autoConstants(pureGet)
const set = autoConstants(pureSet)
const all = autoConstants(pureAll)
const chain = autoConstants(pureChain)
const when = autoConstants(pureWhen)
const choice = autoConstants(pureChoice)

const lift = func => autoConstants(liftToMessage(func))

export {
  message,
  extract,
  extend,
  get,
  set,
  all,
  chain,
  constant,
  apply,
  when,
  choice,
  lift
}
