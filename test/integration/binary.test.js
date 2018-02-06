import { add, get, message } from '../../src'
import { given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs } from '../constraints'
import test from '../test'

const testFlows = [
  add(get('x'), get('y')),
  add(get('x'), 2),
  add(1, get('y'))
]

test(
  "Basic sequential operations",

  ["get value, get another value, summate", testFlows,
    given([ { x: 1, y: 2 }, ...data({ x: 1, y: 2 }), ...scope({ x: 1, y: 2 })], verify(dataIs(3)))
  ],

  ["doesn't break when provided invalid data", testFlows,
    given(anything, verify(dataIs(undefined)))
  ]
)
