import { chain, lift } from '../../src'
import { given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs } from '../constraints'
import test from '../test'

const f = lift(x => x)

const input = [
  ...data(['a', 'b', 'c']),
  ['a', 'b', 'c']
]

test(
  "chain(x, y, z) doesn't care about brackets:",

  ["output is the same for 0-arity fragments with or without brackets",
    [ chain(f, f, f),
      chain(f(), f(), f()),
      chain(f(), f, f),
      chain(f, f(), f),
      chain(f, f, f()),
      chain(f(), f, f()),
      chain(f(), f(), f),
      chain(f, f(), f()) ],

    given(input, verify(dataIs(['a', 'b', 'c'])))
  ]
)
