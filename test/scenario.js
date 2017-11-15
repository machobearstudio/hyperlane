import expect from 'expect'
import { describe } from 'mocha'

const scenario = (description, ...cases) =>
  describe(description, function () {
    let i
    for (i = 0; i < cases.length; i++) {
      const [comment, flow, requirement] = cases[i]
      it(comment, function () {
        return requirement(flow).then(result => expect(result).toEqual(true))
      })
    }
  })

export default scenario
