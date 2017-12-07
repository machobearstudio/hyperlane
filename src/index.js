import * as transport from './transport'
import fragment from './fragment'
import message from './message'

export const configure = (config) => {
  transport.setTransport(config)
}

configure({ transport: 'async' })

export { message, transport, fragment }

export * from './dictionary'
export * from './testing'
