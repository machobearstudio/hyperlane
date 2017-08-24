import { extend } from './message'

const constant = value => extend(() => value)

export default constant
