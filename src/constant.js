import retransform from 'retransform'
import { extend } from './message'

const constant = value => extend(retransform(value))

export default constant
