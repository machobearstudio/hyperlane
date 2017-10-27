import createTransport from './transport'
import * as flow from './flow'
import { construct, extract, combine, collect, spread, extend, applicator } from './message'

const message = construct;
message.construct = construct;
message.extract = extract;
message.combine = combine;
message.collect = collect;
message.spread = spread;
message.extend = extend;
message.applicator = applicator;

export { message }

export const configure = (config) => {
  const transportProvider = config.flow || config.transport
  const transport = typeof transportProvider === 'object'
    ? transportProvider
    : createTransport(transportProvider)

  flow.setTransport(transport)
}

configure({ flow: 'async' })

export * from './dictionary'
