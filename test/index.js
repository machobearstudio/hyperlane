import equal from 'deep-equal'
import { get, set, given, assert } from '../src'
import { anything, data } from './samples'
import { messageOutput, scopeInvariant, dataInvariant, dataIs, dataEquivalentTo } from './constraints'

import testGet from './get.test'

testGet().then(x => console.log(x))
