import equal from 'deep-equal'
import { message } from '../src'

export const messageOutput  =  (input, output) => message.isMessage(output)
export const scopeInvariant =  (input, output) => message.isMessage(output) && equal(input.scope, output.scope)
export const dataInvariant  =  (input, output) => message.isMessage(output) && equal(input.data, output.data)
export const dataIs = x     => (input, output) => message.isMessage(output) && equal(output.data, x)
