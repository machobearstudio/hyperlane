import autoConstants from './auto-constants'
import liftToMessage from './lift'
import constant from './constant'
import apply from './apply'
import {
  message,
  extract,
  extend,
  get as pureGet,
  set as pureSet,
  all as pureAll,
  chain as pureChain
} from './core'


const get = autoConstants(pureGet)
const set = autoConstants(pureSet)
const all = autoConstants(pureAll)
const chain = autoConstants(pureChain)

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
  lift
}
