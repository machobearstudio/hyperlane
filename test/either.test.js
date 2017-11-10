import { assert, testCase, suite, either, message, get } from '../src'

// Test data
const testLeft = testCase(
  "returns left when it's not undefined",
  either('a', 'b'),
  assert(1, message('a')),
  assert(message(), message('a'))
)

const runAll = suite('either', testLeft)

export default runAll
