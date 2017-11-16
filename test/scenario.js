import expect from 'expect'
import { describe } from 'mocha'

const scenario = (description, ...cases) =>
  describe(description, function () {
    let i, j
    for (i = 0; i < cases.length; i++) {
      const [comment, flow, ...requirements] = cases[i]

      it(comment, function () {
        return Promise
          .all(requirements.map(f => f(flow)))
          .then(results => results.filter(x => x !== true))
          .then(result => expect(result).toEqual([]))
      })
    }
  })

export default scenario
