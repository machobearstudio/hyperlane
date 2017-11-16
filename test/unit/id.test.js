import { id } from '../../src'
import { identity, maybe, dataPropertyRead, dataDeepRead, scopePropertyRead, scopeDeepRead } from './cases'
import test from '../test'

test(
  "id",

  ["acts as identity", id, identity]
)
