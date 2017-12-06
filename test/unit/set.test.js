import { set } from '../../src'
import { given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs, scopeHas, scopeIs } from '../constraints'
import test from '../test'

test(
  "set(location, data)",

  ["sets scope by name", set('someValue', '12345'),
    given(anything, verify(messageOutput, dataInvariant, scopeHas('someValue', '12345')))],

  ["replaces entire scope when provided an empty string as location", set('', { x: 'y' }),
    given(anything, verify(messageOutput, dataInvariant, scopeIs({ x: 'y' })))]
)
