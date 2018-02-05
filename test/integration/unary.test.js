import { uppercase, get, chain, message } from '../../src'
import { given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs } from '../constraints'
import test from '../test'

const validData = [
  ...data({ doge: 'wow', b: 'such much' }),
  ...scope({ doge: 'wow', b: 'such much' }),
  { doge: 'wow', b: 'such much' }
]

const flowsToTest = [
  uppercase(get('doge')),
  chain(get('doge'), uppercase)
]

test(
  "Basic sequential operations",

  ["get data, uppercase", flowsToTest, given(validData, verify(scopeInvariant, dataIs('WOW')))],

  ["doesn't break when provided invalid data", flowsToTest, given(anything, verify(scopeInvariant, dataIs(undefined)))]
)
