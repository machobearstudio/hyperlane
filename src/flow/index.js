import remap from 'retransform'

const apply = arg => predicate => (
  typeof predicate === 'function' ? predicate(arg) : predicate
)

const flow = func => (...parameters) => input =>
  func(...parameters.map(x => remap(x)(input), input)

export default flow
