import equal from 'deep-equal'
import { message, collapse } from '../src'

const data = (...args) => collapse(message(...args)).data
const scope = (...args) => collapse(message(...args)).scope

export const messageOutput  =  (input, output) => message.isInstance(output)
export const scopeInvariant =  (input, output) => equal(scope(input), scope(output))
export const dataInvariant  =  (input, output) => equal(data(input), data(output))
export const dataIs   = x   => (input, output) => equal(data(output), x)
export const dataHas = (n, v) => (_, output) => equal(scope(output)[n], v)
export const scopeIs  = x   => (input, output) => equal(scope(output), x)
export const scopeHas = (n, v) => (_, output) => equal(scope(output)[n], v)
