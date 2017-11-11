export const objects  = [{}, { a: 'b' }, { a: 100, b: 'c' }, { a: 100500, b: '200300', c: { d: 2 } }]
export const arrays   = [[], [ 1, 2, 5, 7 ], [ 'abc', 123, true ]]
export const numbers  = [0, 1, 100500, 0.0, 1.5, -10]
export const strings  = ['', 'doge wow such much!', '12345', '0']
export const booleans = [true, false]

export const primitives = [...numbers, ...strings, ...booleans]
export const any = [null, undefined, ...primitives, ...objects, ...arrays]

export const anything = { data: any, scope: objects }
