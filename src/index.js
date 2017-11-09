import * as transport from './transport'
import { construct, extract, combine, collect, spread, applicator } from './message'

const message = construct;
message.construct = construct;
message.extract = extract;
message.combine = combine;
message.collect = collect;
message.spread = spread;
message.applicator = applicator;

export { message, transport }

export const configure = (config) => {
  transport.setTransport(config)
}

configure({ transport: 'bus' })

export * from './dictionary'
