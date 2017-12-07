import { construct, extract, combine, extend, isInstance, get, set } from './message'

const message = construct
message.isInstance = isInstance
message.construct = construct
message.extract = extract
message.extend = extend
message.combine = combine
message.get = get
message.set = set

export { construct, extract, combine, extend, isInstance, set, get }

export default message
