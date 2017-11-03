import map from 'poly-map'
import filter from 'poly-filter'
import event from 'simple-event'
import uuid from 'uuid'
import { configure, message, get, set, chain, uppercase, lift } from '../src'
import log from './log'

class Bus {
  constructor() {
    this.event = event()
    this.count = 0
  }

  get nextId() {
    this.count++
    return this.count
  }

  on(type, func) {
    const handler = (type === '*'
      ? m => func(m.payload, m.type)
      : m => (m.type === type ? func(m.payload, m.type) : undefined)
    )

    this.event.subscribe(handler)
  }

  dispatch(type, payload) {
    if (payload instanceof Promise) {
      payload.then(x => this.event.emit({ type, payload: x }))
    } else if (payload !== undefined) {
      this.event.emit({ type, payload })
    }
  }
}

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

const bus = new Bus()
bus.on('*', (data, type) => console.log(data, type))

const sequential = ([start, ...rest]) => {
  const sequence = createEmitter(start)

  const resultType = rest
    .map(createEmitter)
    .reduce((prev, next) => {
      bus.on(prev, next);
      return next.$type
    }, sequence.$type)

  sequence.$type = resultType

  return sequence
}

const parallel = funcs => {
  const batch = map(createEmitter, funcs)
  const mapper = createEmitter(x => { map(f => f(x), batch); return undefined })

  const reducer = buffer(mapper.$type, batch)
  map((x, key) => bus.on(x.$type, value => reducer(key, value)), batch)

  mapper.$t = 'parallel'

  return mapper
}

const apply = func => createEmitter(inputs => func.apply(undefined, inputs))

configure({
  transport: { parallel, sequential, apply, forAll: () => {} }
})

const flow = set('DOOOOOGE', uppercase(get('test')))
// console.log(flow)
// const flow = sequential([
//   parallel([
//     sequential([x => x.test, x => String(x).toUpperCase()]),
//     sequential([x => x.test, x => String(x).toLowerCase()]),
//   ]),
//   apply((...xs) => xs[0])
// ])

flow({ test: 'Wow,Doge' })
