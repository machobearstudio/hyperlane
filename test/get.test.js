import { get, given, assert } from '../src'
import { anything, data } from './samples'
import { scopeInvariant, dataInvariant, dataIs } from './constraints'
import scenario from './scenario'

const identity = given(anything, assert(scopeInvariant, dataInvariant))
const propertyRead = given(data({ doge: 'wow' }), assert(dataIs('wow')))
const deepRead = given(data({ doge: { such: { much: 'wow' } } }), assert(dataIs('wow')))

const dataGetter = scenario(
  'get() correctly reads data from input',
  [get(''), identity],
  [get('doge'), propertyRead],
  [get('doge.such.much'), deepRead]
)

export default dataGetter
