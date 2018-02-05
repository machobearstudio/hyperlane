import equal from 'deep-equal'
import { message } from '../src'

export const messageOutput  =  (input, output) => message.isInstance(output)
export const scopeInvariant =  (input, output) => message.isInstance(output) && equal(input.scope || {}, output.scope)
export const dataInvariant  =  (input, output) => message.isInstance(output) && equal(input.data, output.data)
export const dataIs   = x   => (input, output) => message.isInstance(output) && equal(output.data, x)
export const scopeIs  = x   => (input, output) => message.isInstance(output) && equal(output.scope, x)
export const scopeHas = (n, v) => (_, output) => message.isInstance(output) && equal(output.scope[n], v)
