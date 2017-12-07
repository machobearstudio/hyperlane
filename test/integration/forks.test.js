import { get, eq, when, set, message, uppercase } from '../../src'
import { given, verify } from '../../src'
import { anything, data, scope, sample } from '../samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs } from '../constraints'
import test from '../test'

const wow = [
  ...data({ doge: 'wow!!', b: 'such much', z: 'nice' }),
  ...scope({ doge: 'wow!!', b: 'such much', z: 'nice' })
]

test(
  "when(c, y, n):",

  ["chooses left option on truthy and right condition",
    [ when(eq(get('doge'), 'wow!!'), uppercase(get('b')), 'nice'),
      when('wow!!', uppercase('suCh much'), 'nice'),
      when(get('doge'), 'SUCH MUCH', 'nothing here'),
      when(true, 'SUCH MUCH', get('z')) ],

    given(wow, verify(scopeInvariant, dataIs('SUCH MUCH')))
  ],

  ["falls back to right option",
    [ when(eq(get('doge'), 'wow!!'), uppercase(get('b')), 'nice'),
      when(get('nothing to get here'), 'SUCH MUCH', 'nice'),
      when(false, 'SUCH MUCH', 'nice') ],

    given(anything, verify(scopeInvariant, dataIs('nice')))
  ],

  ["ignored option is not calculated",
    [ when(true, 'SUCH MUCH', set('ooo', 100500)),
      when(false, set('ooo', 100500), 'SUCH MUCH') ],

    given(wow, verify(scopeInvariant, dataIs('SUCH MUCH')))
  ]
)
