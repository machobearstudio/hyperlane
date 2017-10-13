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

`map(flow)` - control flow fragment for parallel operations on an array of incoming data. Similar to `all`, except that each sub-flow gets only a single item from the input array.

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

`add` - summate two numbers
```javascript
const test = add(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: 3, scope: {} }
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

`lte` - less than or equal

`isDefined` - check if input is defined

`isUndefined` - check if input is undefined
