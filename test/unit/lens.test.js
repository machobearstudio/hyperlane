import { lens } from '../../src'
import { identity, maybe, dataPropertyRead, dataDeepRead, scopePropertyRead, scopeDeepRead } from './cases'
import test from '../test'

const doge = lens('doge')
const nothing = lens('nothing.found.here')

test(
  "const x = lens(location)",

  ["x reads data", doge, dataPropertyRead],
  ["x reads scope", doge, scopePropertyRead],

  ["x.get() reads data", doge.get, dataPropertyRead],
  ["x.get() reads scope", doge.get, scopePropertyRead],

  ["returns undefined if no property found", nothing, maybe]
)
