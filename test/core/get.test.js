import { get, given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { scopeInvariant, dataInvariant, dataIs } from '../constraints'
import scenario from '../scenario'

const identity = given(anything, verify(scopeInvariant, dataInvariant))

scenario(
  "get('')",
  ["acts as identity", get(''), identity]
)

const shallowProperty = { doge: 'wow' }
const deepProperty = { doge: { such: { much: 'wow' } } }

scenario(
  "get(location)",

  ["reads data by name", get('doge'),
    given(data(shallowProperty), verify(dataIs('wow')))
  ],

  ["reads scope by name", get('doge'),
    given(scope(shallowProperty), verify(dataIs('wow')))
  ],

  ["reads data by deep path", get('doge.such.much'),
    given(data(deepProperty), verify(dataIs('wow')))
  ],

  ["reads data by deep path as array", get(['doge', 'such', 'much']),
    given(data(deepProperty), verify(dataIs('wow')))
  ],

  ["reads scope by deep path", get('doge.such.much'),
    given(scope(deepProperty), verify(dataIs('wow')))
  ],

  ["reads scope by deep path as array", get(['doge', 'such', 'much']),
    given(scope(deepProperty), verify(dataIs('wow')))
  ],
)
