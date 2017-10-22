import zip from '../utils/zip'

export const call       = func  => input  => Promise.resolve(input).then(func)
export const apply      = func  => inputs => Promise.all(inputs).then(xs => func.apply(undefined, xs))

export const sequential = funcs => input  => funcs
  .reduce((prev, func) => prev.then(func), Promise.resolve(input))
  .catch(e => console.log(e))

export const parallel   = funcs => input  => Promise.resolve(input).then(x => (
  funcs instanceof Array
    ? Promise.all(funcs.map(func => func(input)))
    : Promise.all(Object.values(funcs).map(func => func(input))).then(zip(Object.keys(funcs)))
))

export const forAll     = func  => inputs => (
  inputs instanceof Array
    ? Promise.all(inputs.map(call(func)))
    : Promise.all(Object.values(inputs).map(call(func))).then(zip(Object.keys(inputs)))
)