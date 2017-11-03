import polyMap from 'poly-map'
import polyFilter from 'poly-filter'
import event from 'simple-event'
import uuid from 'uuid'
import { configure, message, get, set, chain, uppercase, lift, map } from '../src'
import log from './log'

const bus = event();
bus.on = (type, func) => bus.subscribe(m => (m.type === type ? func(m.payload) : undefined))
bus.send = (type, payload) => (payload !== undefined && bus.emit({ type, payload }))

const emitter = type => payload => (payload !== undefined && bus.emit({ type, payload }))
const tranceiver = (typeIn, handler, typeOut) => x => Promise.resolve(x).then(m => (m.type === typeIn ? handler(m.payload) : undefined)).then(emitter(typeOut))

const buffer = elements => {
  let values = polyMap(x => undefined, elements)

  return input => {
    polyMap((value, key) => { values[key] = value }, input)

    if (values.filter(x => x === undefined).length === 0) {
      const result = polyMap(x => x, values)
      values = polyMap(x => undefined, elements)

      return result
    }
  }
}

const apply = func => payload => func(...Object.values(payload))

const parallel = funcs => {
  const launchType = `pl_${uuid.v4()}`
  const resultType = `pj_${uuid.v4()}`

  const reducer = buffer(funcs)

  polyMap((func, index) => {
    if (func.$class) {
      bus.on(func.$class, x => bus.send(resultType, reducer({ [index]: x })))
    }
  }, funcs)

  bus.on(launchType, input => {
    const immediate = polyMap((func, index) => {
      const output = func(input)
      if (!func.$class && !(output instanceof Promise)) return output
    }, funcs)

    bus.send(resultType, reducer(immediate))
  })

  const f = emitter(launchType)
  f.$class = resultType

  return f
}

const sequential = funcs => {
  const launchType = `s_${uuid.v4()}`

  const resultType = funcs.reduce((requestType, func) => {
    const responseType = func.$class || `s_${uuid.v4()}`
    bus.on(requestType, x => Promise.resolve(x)
      .then(func)
      .then(response => bus.send(responseType, response))
    )

    return responseType
  }, launchType)

  const f = emitter(launchType)
  f.$class = resultType

  return f
}

const forAll = func => {
  const launchType = uuid.v4()
  const joinType = uuid.v4()
  const resultType = uuid.v4()

  const joinEmitter = emitter(joinType)
  bus.on(launchType, items => {
    const reducer = buffer(funcs)
    bus.subscribe(tranceiver(joinType, reducer, resultType))

    polyMap(item => joinEmitter(func(payload)))
  })

  const f = emitter(launchType)
  f.$class = resultType

  return f
}

configure({
  transport: {
    apply,
    parallel,
    sequential,
    forAll
  }
})

const flow = get('test')
bus.subscribe(log)

// const flow = get('test')
// const flow = apply(() => console.log(`wow ${test}`))

flow({ test: 'wow' })
// console.log(flow)

