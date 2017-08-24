import curry from 'curry'

const callWith = (input, handler) => handler(input)

export default curry(callWith)
