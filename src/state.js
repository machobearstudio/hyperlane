import map from 'poly-map'
import { extract, construct, combine, get, set } from './store'

export const collect = messages => {
  const inputs = map(construct, messages)

  return combine(
    Object.values(inputs).reduce(combine, construct()),
    construct(map(extract, inputs))
  )
}

export const spread = input => map(item => combine(input, construct(item)), extract(input))

export const lift = func => (...inputs) => {
  const collected = collect(inputs.map(construct))
  const output = combine(collected, construct(func.apply(undefined, extract(collected))))

  return (extract(output) instanceof Promise
    ? extract(output).then(data => combine(output, construct(data)))
    : output
  )
}

export { get, set }
