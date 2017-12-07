import * as transport from './transport'
import fragment from './fragment'
import message from './store'

export const configure = (config) => {
  transport.setTransport(config)
}

configure({
  transport: 'async',
  store: 'message'
})

export { message, transport, fragment }

export * from './dictionary'
export * from './testing'
