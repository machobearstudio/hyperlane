import { get, given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { scopeInvariant, dataInvariant, dataIs } from '../constraints'
import test from '../test'

const identity = given(anything, verify(scopeInvariant, dataInvariant))

test(
  "get('')",
  ["acts as identity", get(''), identity]
)

test(
  "get(location: string)",

  ["reads data by name", get('doge'),
    given(data({ doge: 'wow' }), verify(scopeInvariant, dataIs('wow'))),
    given(data({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs({ such: { much: 'wow' } })))
  ],

  ["reads scope by name", get('doge'),
    given(scope({ doge: 'wow' }), verify(scopeInvariant, dataIs('wow'))),
    given(scope({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs({ such: { much: 'wow' } })))
  ],

  ["reads data by deep path", get('doge.such.much'),
    given(data({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs('wow')))
  ],

  ["reads scope by deep path", get('doge.such.much'),
    given(scope({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs('wow')))
  ],

  ["returns undefined if no property found", get('nothing.like.this'),
    given(anything, verify(scopeInvariant, dataIs(undefined))),
  ]
)

test(
  "get(location: array)",

  ["reads data by deep path", get(['doge', 'such', 'much']),
    given(data({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs('wow')))
  ],

  ["reads scope by deep path", get(['doge', 'such', 'much']),
    given(scope({ doge: { such: { much: 'wow' } } }), verify(scopeInvariant, dataIs('wow')))
  ],

  ["returns undefined if no property found", get(['nothing', 'like', 'this']),
    given(anything, verify(scopeInvariant, dataIs(undefined))),
  ]
)
