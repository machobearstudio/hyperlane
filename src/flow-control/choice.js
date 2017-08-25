import { extract, extend } from '../core'

const evaluate = (predicate, input) => (
  typeof predicate === 'function' ? predicate(input) : predicate
)

const choice = (check, options) => extend(input => {
  const value = extract(check(input))
  const option = extract(options(input))[value]

  return (typeof option === 'function' ? option(input) : option)
})

export default choice
