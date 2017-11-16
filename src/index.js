import * as transport from './transport'
import fragment from './fragment'
import { construct, extract, combine, collect, spread, applicator, isMessage } from './message'

const message = construct;
message.isMessage = isMessage;
message.construct = construct;
message.extract = extract;
message.combine = combine;
message.collect = collect;
message.spread = spread;
message.applicator = applicator;

export { message, transport, fragment }

export const configure = (config) => {
  transport.setTransport(config)
}

configure({ transport: 'async' })

export * from './dictionary'
export * from './testing'
