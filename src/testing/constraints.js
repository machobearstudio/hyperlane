import equal from 'deep-equal'
import { isMessage } from '../message'

export const messageOutput  = (input, output) => isMessage(output)
export const scopeInvariant = (input, output) => equal(input.scope, output.scope)
export const dataInvariant  = (input, output) => equal(input.data, output.data)
