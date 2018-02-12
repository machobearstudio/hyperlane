import * as transport from './transport'
import fragment from './fragment'
import * as store from './store'

const message = store.message
const collapse = store.collapse

export const configure = (config) => {
  transport.setTransport(config)
  store.setStore(config)
}

configure({
  transport: 'async',
  store: 'message'
})

export { message, transport, fragment, collapse }
export * from './dictionary'
export * from './testing'
