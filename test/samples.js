import flatten from 'array-flatten'
import { message } from '../src'

export const sample = ({ data, scope }) => flatten(
  scope.map(x => data.map(y => message(y, x)))
)

const objects  = [{}, { propertyA: 'b' }, { propertyA: 100, propertyB: 'c' }, { propertyA: 100500, propertyB: '200300', propertyC: { propertyD: 2 } }]
const arrays   = [[], [ 1, 2, 5, 7 ], [ 'abc', 123, true ]]
const numbers  = [0, 1, 100500, 0.0, 1.5, -10]
const strings  = ['', 'doge wow such much!', '12345', '0']
const booleans = [true, false]

const primitives = [...numbers, ...strings, ...booleans]
const any = [null, undefined, ...primitives, ...objects, ...arrays]

export const anything  =  sample({ data: any, scope: objects })
export const data  = x => sample({ data: [x], scope: objects })
export const scope = x => sample({ data: any, scope: [x] })
