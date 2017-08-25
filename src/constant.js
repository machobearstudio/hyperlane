import retransform from 'retransform'
import { extend } from './core'

const constant = value => extend(retransform(value))

export default constant
