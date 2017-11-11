import flatten from 'array-flatten'
import { construct } from '../message'

const given = ({ data, scope }) => flatten(
  scope.map(x => data.map(y => construct(y, x)))
)

const objects  = [{}, { a: 'b' }, { a: 100, b: 'c' }, { a: 100500, b: '200300', c: { d: 2 } }]
const arrays   = [[], [ 1, 2, 5, 7 ], [ 'abc', 123, true ]]
const numbers  = [0, 1, 100500, 0.0, 1.5, -10]
const strings  = ['', 'doge wow such much!', '12345', '0']
const booleans = [true, false]

const primitives = [...numbers, ...strings, ...booleans]
const any = [null, undefined, ...primitives, ...objects, ...arrays]

given.anything = given({ data: any, scope: objects })

export default given
