# hyperlane
Context-dependent functional style computation

## Description
This tool allows to construct computation pipelines heavily inspired by Haskell's 'do-notation'. All pipeline fragments are pure, computation state (context) is isolated as a part of the data flowing through the pipeline.

## Features
- Automatically supports synchronous and asyncronous functions
- Allows for lifting any pure function into computation context
- Composable structure allows to add other aspects to the pipeline fragments

## Installation

```
npm install hyperlane
```

## Usage

### Simple example
```javascript
import { message, get, set, lift } from '../src'

const summate = (x, y) => x + y
const sum = lift(summate)

const testMessage = message({ a: 100, b: 200 }, { some: 'state' })

// Test flows
const testFlow = set('summ', sum(get('a'), get('b')))

testFlow(testMessage).then(x => console.log(x)) // => Message{ data: 300, scope: { summ: 300, such: 'doge!' } }
```


### Built-in fragments
`lift(f)` - turn any pure function into a hyperlane fragment:
```javascript
const f = lift((x, y, z) => return x + y / z)
```

`message(data, scope)` - wrap data and state (computation context) into a hyperlane message:
```javascript
const m = message('wow', { such: 'doge!' }); // => Message{ data: 'wow', scope: { such: 'doge!' } }
```

`get(name)` - get a value from computation context:
```javascript
const doge = get('doge')

// All of the following produce: 'wow'

doge({ doge: 'wow!', such: 'much' }).data
doge(message({ doge: 'wow!', such: 'much' })).data
doge(message({ doge: 'wow!' }, { such: 'much' })).data
doge(message(null, { doge: 'wow!', such: 'much' })).data
doge(message({ doge: 'wow!' }, { doge: 'nope', such: 'much' })).data
```

`set(name, value)` - sets a value in computation context:
```javascript
const setDoge = set('doge', get(''))

// All of the following produce a message where the scope

setDoge('wow!') // => Message{ data: 'wow!', scope: { doge: 'wow!' } }
setDoge(message('wow!')) // => Message{ data: 'wow!', scope: { doge: 'wow!' } }
setDoge(message('wow!', { such: 'much' })) // => Message{ data: 'wow!', scope: { such: 'much', doge: 'wow!' } }
setDoge(message('wow!', { doge: 'such much' })) // => Message{ data: 'wow!', scope: { doge: 'wow!' } }
```

`when(condition, yes, [no])` - control flow fork: the `yes` path is taken is the `condition` is evaluated to be truthy, the `no` path is taken otherwise. Note that `no` parameter is not only optionsl, but it is not be calculated at all in case of falsy `condition`
```javascript
const check = when(get('doge'), set('says', 'wow'), set('says', 'nothing'))

check({ doge: 'here' }) // => Message{ data: { doge: 'here' }, scope: { says: 'wow!' } }
check({}) // => Message{ data: {}, scope: { says: 'nothing' } }
```

`chain(flow1, flow2, flow3, ...)` - control flow fragment for sequential operations:
```javascript
const countPosts = chain(httpGet('http://my-site.com/api/posts'), count)
```

`all(flow1, flow2, flow3, ...)` - control flow fragment for parallel operations. Each sub-flow receives a copy of the original message, results are merged together. Asynchronous sub-flows are executed in parallel, control is passed downstream only when all the parallel tasks are completed.

`map(flow)` - control flow fragment for parallel operations on a collection (array or hash-map) of incoming data. Similar to `all`, except that each sub-flow gets only a single item from the collection as its input data.

`filter(condition)` - apply `condition` to each item in the input collection and returen new collection with only those items for which the `condition` is truthy

`object({ name1: flow1, name2: flow2, ... })` - similar to `all` and will be merged with it in future versions

`array(flow1, flow2, flow3, ...)` - see `all`, will be merged with it in future versions

`values` - returns an array of values from input collection (array or hash-map)
```javascript
const test = values(get(''))

test({ a: 100, b: 200, c: 300, d: 400 }) // => Message{ data: [100, 200, 300, 400], scope: {} }
```

`keys` - returns an array of keys from input collection (array or hash-map)
```javascript
const test = keys(get(''))

test({ a: 100, b: 200, c: 300, d: 400 }) // => Message{ data: ['a', 'b', 'c', 'd'], scope: {} }
```

`concat` - concatenate two arrays
```javascript
const test = concat(get(''), array(300, 400))

test([100, 200]) // => Message{ data: [100, 200, 300, 400], scope: {} }
```

`push` - push an element into an array
```javascript
const test = push(get(''), 300)

test([100, 200]) // => Message{ data: [100, 200, 300], scope: {} }
```

`head` - takes first element of an array
```javascript
const test = head(get(''))

test([100, 200, 300, 400]) // => Message{ data: 100, scope: {} }
```

`tail` - removes first element from an array
```javascript
const test = tail(get(''))

test([100, 200, 300, 400]) // => Message{ data: [200, 300, 400], scope: {} }
```

`uppercase` - convert string to upper case
```javascript
const test = uppercase(get(''))

test('wow!') // => Message{ data: 'WOW!', scope: {} }
```

`lowercase` - convert string to lower case
```javascript
const test = lowercase(get(''))

test('WOW!') // => Message{ data: 'wow!', scope: {} }
```

`add` - summate two numbers or concatenate two strings
```javascript
const test = add(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: 3, scope: {} }
test({ a: 'doge', b: 'wow!' }) // => Message{ data: 'dogewow!, scope: {} }
```

`add` - summate two numbers or concatenate two strings
```javascript
const test = add(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: 3, scope: {} }
test({ a: 'doge', b: 'wow!' }) // => Message{ data: 'dogewow!, scope: {} }
```

`subtract` - subtract two numbers
```javascript
const test = subrtact(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: -1, scope: {} }
```

`multiply` - multiply two numbers
```javascript
const test = multiply(get('a'), get('b'))

test({ a: 2, b: 5 }) // => Message{ data: 10, scope: {} }
```

`divide` - divide numbers
```javascript
const test = divide(get('a'), get('b'))

test({ a: 8, b: 2 }) // => Message{ data: 4, scope: {} }
```

`not(x)` - logical negation
```javascript
const test = not(get('a'))

test({ a: true }) // => Message{ data: false, scope: {} }
test({ a: false }) // => Message{ data: true, scope: {} }
```

`and(x, y)` - logical AND
```javascript
const test = and(get('a'), get('b'))

test({ a: true, b: false }) // => Message{ data: false, scope: {} }
test({ a: true, b: true }) // => Message{ data: true, scope: {} }
```

`or` - logical OR
```javascript
const test = or(get('a'), get('b'))

test({ a: true, b: false }) // => Message{ data: true, scope: {} }
test({ a: false, b: false }) // => Message{ data: false, scope: {} }
```

`xor` - logical XOR
```javascript
const test = xor(get('a'), get('b'))

test({ a: false, b: false }) // => Message{ data: false, scope: {} }
test({ a: true, b: false }) // => Message{ data: true, scope: {} }
test({ a: false, b: true }) // => Message{ data: true, scope: {} }
test({ a: true, b: true }) // => Message{ data: false, scope: {} }
```


`eq` - strict equality
```javascript
const test = eq(get('a'), get('b'))

test({ a: 2, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: false, scope: {} }
```

`neq` - strict non-equality
```javascript
const test = neq(get('a'), get('b'))

test({ a: 2, b: 2 }) // => Message{ data: false, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: true, scope: {} }
```

`gt` - greater than
```javascript
const test = gt(get('a'), get('b'))

test({ a: 2, b: 2 }) // => Message{ data: false, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: true, scope: {} }
```

`lt` - less then
```javascript
const test = gt(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: false, scope: {} }
```

`gte` - greater than or equal
```javascript
const test = gte(get('a'), get('b'))

test({ a: 0, b: 2 }) // => Message{ data: false, scope: {} }
test({ a: 2, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: true, scope: {} }
```

`lte` - less than or equal
```javascript
const test = gt(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 2, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: false, scope: {} }
```

`isDefined` - check if input is defined
```javascript
const test = isDefined(get(''))

test(100500) // => Message{ data: true, scope: {} }
test({ a: 2, b: 2 }) // => Message{ data: true, scope: {} }
test(undefined) // => Message{ data: false, scope: {} }
```

`isUndefined` - check if input is undefined
```javascript
const test = isUndefined(get(''))

test(100500) // => Message{ data: false, scope: {} }
test({ a: 2, b: 2 }) // => Message{ data: false, scope: {} }
test(undefined) // => Message{ data: true, scope: {} }
```


## TODO
- More fragments (open for suggestions)
- Unit tests
- Performance optimization

## License

Apache 2 (see LICENSE file in the package directory)