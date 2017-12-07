import * as transport from './transport'
import fragment from './fragment'
import * as store from './store'

const message = store.message

export const configure = (config) => {
  transport.setTransport(config)
  store.setStore(config)
}

configure({
  transport: 'async',
  store: 'message'
})

export { message, transport, fragment }
export * from './dictionary'
export * from './testing'
