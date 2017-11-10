import { log } from '../src'
import testEither from './either.test.js'

const show = results => log(results.then(({ name, success, passed, failed }) =>
  [ name, (success ? 'ALL PASS' : 'FAIL') ]
    .concat(failed.map(x => [ x, 'FAIL' ]))
))

show(testEither({ transport: 'sync' }))
show(testEither({ transport: 'async' }))
