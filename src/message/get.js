import { read } from '../path'
import { extend, extract } from './message'

const get = extend((location, object) =>
  read(extract(location), { ...object.scope, ...object.data })
)

export default get
