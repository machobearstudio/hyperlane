import Bus from './simple-bus-provider'
import map from 'poly-map'
import filter from 'poly-filter'

const bus = new Bus()

const createEmitter = (func) => {
  if (func.$class === 'Emitter') return func

  const type = bus.nextId
  const emitter = payload => bus.dispatch(type, func(payload))
  emitter.$class = 'Emitter'
  emitter.$type = type

  return emitter
}

const buffer = (type, structure) => {
  let values = map(x => undefined, structure)

  return (key, value) => {
    values[key] = value

    if (Object.values(filter(x => x === undefined, values)).length === 0) {
      bus.dispatch(type, values)
    }
  }
}

export const sequential = ([start, ...rest]) => {
  const sequence = createEmitter(start)

  const resultType = rest
    .map(createEmitter)
    .reduce((prev, next) => { bus.on(prev, next); return next.$type }, sequence.$type)

  sequence.$type = resultType

  return sequence
}

export const parallel = funcs => {
  const batch = map(createEmitter, funcs)
  const mapper = createEmitter(x => { map(f => f(x), batch); return undefined })

  const reducer = buffer(mapper.$type, batch)
  map((x, key) => bus.on(x.$type, value => reducer(key, value)), batch)

  return mapper
}

export const apply = func => createEmitter(inputs => func.apply(undefined, inputs))

export const forAll = () => {}
