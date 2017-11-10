import { log } from '../src'
import testEither from './either.test.js'

const show = results => log(results.then(xs => xs.reduce(
  (acc, { description, success, failed }) => ({
    ...acc, [description]: (success ? 'PASS' : 'FAIL')
  }), {})
))

show(testEither({ transport: 'sync' }))
show(testEither({ transport: 'async' }))
