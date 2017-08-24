import { extract, extend } from './message'

const apply = handler => extend(input =>
  handler.apply(undefined, extract(input))
)

export default apply
