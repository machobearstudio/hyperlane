import equal from 'deep-equal'
import { given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs } from '../constraints'

export const identity = given(anything, verify(scopeInvariant, dataInvariant))
export const maybe = given(anything, verify(scopeInvariant, dataIs(undefined)))

export const dataInvisible = given(data({ doge: 'wow' }), verify(scopeInvariant, dataIs(undefined)))
export const dataPropertyRead = [
  given(data({ doge: 'wow' }), verify(scopeInvariant, dataIs('wow'))),
  given(data({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs({ such: { much: 'wow' } })))
]
export const dataDeepRead = given(data({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs('wow')))

export const scopeExposed = given(anything, verify(messageOutput, scopeInvariant, (i, o) => equal(i.scope, o.scope)))
export const scopeInvisible = given(scope({ doge: 'wow' }), verify(scopeInvariant, dataIs(undefined)))
export const scopePropertyRead = [
  given(scope({ doge: 'wow' }), verify(scopeInvariant, dataIs('wow'))),
  given(scope({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs({ such: { much: 'wow' } })))
]
export const scopeDeepRead = given(scope({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs('wow')))
