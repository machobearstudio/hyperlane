import expect from 'expect'
import { describe } from 'mocha'

const test = (description, ...cases) =>
  describe(description, function () {
    let i, j
    for (i = 0; i < cases.length; i++) {
      const [comment, alt, req] = cases[i]
      const requirements = req instanceof Array ? req : [req]
      const alternatives = alt instanceof Array ? alt : [alt]

      it(comment, function () {
        return Promise
          .all(requirements.reduce((acc, f) => acc.concat(alternatives.map(flow => f(flow))), []))
          .then(results => results.filter(x => x !== true))
          .then(result => expect(result).toEqual([]))
      })
    }
  })

export default test
