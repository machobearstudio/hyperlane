import { get, array, when, all, count, message, head, tail, push, concat, join } from '../../src'
import { given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs } from '../constraints'
import test from '../test'

const list = [
  ...data({ a: 'wow!!', b: 'such much', z: 'nice' }),
  ...scope({ a: 'wow!!', b: 'such much', z: 'nice' })
]

test(
  "list operations",

  ["array(x, y, z) -> [x, y, z]; all the same",
    [ array(get('a'), get('b'), get('z')),
      all(get('a'), get('b'), get('z')) ],

    given(list, verify(scopeInvariant, dataIs(['wow!!', 'such much', 'nice'])))
  ],

  ["head [x, y, z] -> x",
    [ head(array(get('a'), get('b'), get('z'))),
      head(all(get('a'), get('b'), get('z'))),
      head([get('a'), get('b'), get('z')]),
      head(['wow!!', 'such much', 'nice']) ],

    given(list, verify(scopeInvariant, dataIs('wow!!')))
  ],

  ["tail [x, y, z] -> [y, z]",
    [ tail(array(get('a'), get('b'), get('z'))),
      tail(all(get('a'), get('b'), get('z'))),
      tail([get('a'), get('b'), get('z')]),
      tail(['wow!!', 'such much', 'nice']) ],

    given(list, verify(scopeInvariant, dataIs(['such much', 'nice'])))
  ],

  ["join(',', [x, y, z]) -> 'x,y,z'",
    [ join(',', array(get('a'), get('b'), get('z'))),
      join(',', all(get('a'), get('b'), get('z'))),
      join(',', [get('a'), get('b'), get('z')]),
      join(',', ['wow!!', 'such much', 'nice']) ],

    given(list, verify(scopeInvariant, dataIs('wow!!,such much,nice')))
  ],

  ["concat([x, y], [z]) -> [x, y, z]",
    [ concat(all(get('a'), get('b')), array(get('z'))),
      concat(array(get('a'), get('b')), all(get('z'))),
      concat([get('a'), get('b')], [get('z')]),
      concat(['wow!!', 'such much'], ['nice']) ],

    given(list, verify(scopeInvariant, dataIs(['wow!!', 'such much', 'nice'])))
  ],

  ["push([x, y], z) -> [x, y, z]",
    [ push(all(get('a'), get('b')), get('z')),
      push(array(get('a'), get('b')), 'nice'),
      push([get('a'), get('b')], get('z')),
      push(['wow!!', 'such much'], 'nice') ],

    given(list, verify(scopeInvariant, dataIs(['wow!!', 'such much', 'nice'])))
  ],

  ["count(xs) counts items in the array",
    [ count(array(get('a'), get('b'), get('z'))),
      count(all(get('a'), get('b'), get('z'))),
      count([get('a'), get('b'), get('z')]),
      count(['wow!!', 'such much', 'nice']) ],

    given(list, verify(scopeInvariant, dataIs(3)))
  ]
)
