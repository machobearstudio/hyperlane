import polyMap from 'poly-map'

export const sequential = funcs => input  => funcs.reduce((prev, func) => func(prev), input)
export const parallel   = funcs => input  => polyMap(func => func(input), funcs)
export const apply      = func  => inputs => func.apply(undefined, inputs)
export const forAll     = func  => inputs => polyMap(input => func(input), inputs)
