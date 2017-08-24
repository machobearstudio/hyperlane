import { extract, extend } from './core'

const apply = handler => extend(input =>
  handler.apply(undefined, extract(input))
)

export default apply
