import { not, get } from '../../src'
import { given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs } from '../constraints'
import test from '../test'

const dataNegated = (i, o) => (i.data ? o.data === false : o.data === true)

test(
  "not(x)",

  ["negates constants", not(true), given(anything, verify(scopeInvariant, dataIs(false)))],
  ["negates constants", not(false), given(anything, verify(scopeInvariant, dataIs(true)))],
  ["negates input data", not(get('')), given(anything, verify(scopeInvariant, dataNegated))],
)
