import polyMap from 'poly-map'
import { extend } from './store'
import { collect } from './state'
import { sequential, parallel } from './transport'

const constant = x => extend(() => x)

const collection = items => sequential([
  parallel(polyMap(structure, items)),
  collect
])

const isObject = x => (
  x !== null &&
  x !== undefined &&
  x.constructor &&
  x.constructor.name === 'Object'
)

const structure = predicate => {
  if (typeof predicate === 'function') {
    return predicate
  }

  if (isObject(predicate) || predicate instanceof Array) {
    return collection(predicate)
  }

  return constant(predicate)
}

export default structure
