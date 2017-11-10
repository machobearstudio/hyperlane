import { assert, useCase, scenario, suite, either, message } from '../src'

const testLeft = useCase(
  "Either: returns left when it's not undefined",
  either('a', 'b'),

  assert(1, message('a')),
  assert(message(), message('a')),
  assert(message(undefined, { x: 'y' }), message('a')),
)

const testRight = useCase(
  "Either: returns right if left is undefined",
  either(undefined, 'b'),

  assert(1, message('b')),
  assert(message(), message('b')),
  assert(message(undefined, { x: 'y' }), message('b')),
)

export default suite('either', testLeft, testRight)
