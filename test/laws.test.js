import expect from 'expect'
import pipe from 'function-pipe'
import { message } from '../src'

describe('Message complies with comonad laws', function () {
  it('extend(extract) = id', () => {
    const test = message.extend(message.extract)
    expect(test(message('wow'))).toEqual(message('wow'))
    expect(test(message({ a: 1, b: 2 }))).toEqual(message({ a: 1, b: 2 }))
    expect(test(message(0))).toEqual(message(0))
    expect(test(message(undefined))).toEqual(message(undefined))
    expect(test(message([1, 2, 3]))).toEqual(message([1, 2, 3]))
    expect(test(message([]))).toEqual(message([]))
  })

  it('pipe(extend(f), extract) = f', () => {
    const f = x => x + 200
    const test = pipe(message.extend(f), message.extract)

    expect(test(100)).toEqual(f(100))
    expect(test(0)).toEqual(f(0))
  })

  it('pipe(extend(f), extend(g)) = extend(pipe(extend(f), g))', () => {
    const f = x => x.data + 200
    const g = x => x.data / 2
    const test1 = pipe(message.extend(f), message.extend(g))
    const test2 = message.extend(pipe(message.extend(f), g))

    expect(test1(message(100))).toEqual(test2(message(100)))
    expect(test1(message(200))).toEqual(test2(message(200)))
  })
})
