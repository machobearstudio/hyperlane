import { extend } from './core'

const constant = value => extend(() => value)

export default constant
