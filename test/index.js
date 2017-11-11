import { get, set, constraints, given, samples, test, assert } from '../src'

const transparentLense = test(
  given(samples.anything),
  assert(
    constraints.messageOutput,
    constraints.scopeInvariant,
    constraints.dataInvariant
  )
)

transparentLense(get('')).then(x => console.log(x ? 'PASS' : 'FAIL'))
