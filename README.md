# hyperlane
Context-dependent computation pipelines

## Description
Express your code as functional pipelines and forget the differences between synchronous and asyncronous control flow!

No callbacks, no promises, no sagas or thunks - same control flow fragments for everything:
- Want to react on debounsed input change events? Sure.
- Want to decide which API to fetch after some other API response is available? Easy!
- Want to map a function over an API response? Why not!

## Features
- Simple control flow abstractions
- Objects, arrays and primitive data doesn't require wrapper functions
- Dynamic switching between different transport mechanisms
- Ability to add any pure function to the pipeline with lifting
- Easy automated testing and fuzzing

## Installation

```
npm install hyperlane
```

## Testing

```
// To run built-in unit-tests
npm test

// To run example flow
npm run example
```

## Usage

### Simple example: querying JSON APIs
```javascript
import https from 'https'
import nodeFetch from 'node-fetch'
import { lift, chain, get, set, map, filter, eq } from 'hyperlane'

// Promise logger
const log = x=> x.then(y => { console.log(y.data); return y })

// Generic HTTP readers
const agent = new https.Agent({ rejectUnauthorized: false })
const fetch = lift(url => nodeFetch(url, { agent }).then(res => res.text()))
const readJson = lift(data => JSON.parse(String(data)))

// A bit more specific API communication fragments
const fetchEntity = url => readJson(fetch(url))
const fetchCollection = url => get('results', readJson(fetch(url)))

// Fetch all people data and then fetch homeworld data
// for each character from a separate URL
const peopleHomeworlds = chain(
  fetchCollection('https://swapi.co/api/people'),
  map({
    name: get('name'),
    homeworld: get('name', fetchEntity(get('homeworld')))
  })
)

// Fetch character names and homeworlds and then
// filter the results by homeworld name
const whosFrom = chain(
  set('planet', get('')),
  peopleHomeworlds,
  filter(eq(get('homeworld'), get('planet')))
)

log(peopleHomeworlds()) // lists Star War characters with their homeworlds
log(whosFrom('Tatooine')) // lists Star War characters from Tatooine
```


### Built-in fragments
`lift(f)` - turn any pure function into a hyperlane fragment:
```javascript
const f = lift((x, y, z) => x + y / z)
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

`either(main, default)` - default value abstraction (think ||). Evaluates `main` and if it's value is undefined evaluates `default` instead
```javascript
const safe = either(get('doge'), 'here')

// All following cases produce => Message{ data: 'here', scope: { says: 'wow!' } }
safe({ doge: 'here' })
safe({})
safe()
```

`chain(flow1, flow2, flow3, ...)` - control flow fragment for sequential operations:
```javascript
const countPosts = chain(httpGet('http://my-site.com/api/posts'), count)
```

`all(flow1, flow2, flow3, ...)` - control flow fragment for parallel operations. Each sub-flow receives a copy of the original message, results are merged together. Asynchronous sub-flows are executed in parallel, control is passed downstream only when all the parallel tasks are completed.
```javascript
const test = all(get('doge'), get('such'))

test({ doge: 'here', such: 'much' }) // => Message{ data: ['here', 'much'], scope: {} }
```

`map(flow)` - control flow fragment for parallel operations on a collection (array or hash-map) of incoming data. Similar to `all`, except that each sub-flow gets only a single item from the collection as its input data.
```javascript
const test = map(get('says'))

test({ doge: { says: 'wow!' }, cat: { says: 'meow' } }) // => Message{ data: { doge: 'wow!', cat: 'meow' }, scope: {} }
```

`filter(condition)` - apply `condition` to each item in the input collection and returen new collection with only those items for which the `condition` is truthy

`values(collection)` - returns an array of values from input collection (array or hash-map)
```javascript
const test = values(get(''))

test({ a: 100, b: 200, c: 300, d: 400 }) // => Message{ data: [100, 200, 300, 400], scope: {} }
```

`keys(collection)` - returns an array of keys from input collection (array or hash-map)
```javascript
const test = keys(get(''))

test({ a: 100, b: 200, c: 300, d: 400 }) // => Message{ data: ['a', 'b', 'c', 'd'], scope: {} }
```

`concat(array, array)` - concatenate two arrays
```javascript
const test = concat(get(''), array(300, 400))

test([100, 200]) // => Message{ data: [100, 200, 300, 400], scope: {} }
```

`push(array, value)` - push an element into an array
```javascript
const test = push(get(''), 300)

test([100, 200]) // => Message{ data: [100, 200, 300], scope: {} }
```

`head(array)` - takes first element of an array
```javascript
const test = head(get(''))

test([100, 200, 300, 400]) // => Message{ data: 100, scope: {} }
```

`tail(array)` - removes first element from an array
```javascript
const test = tail(get(''))

test([100, 200, 300, 400]) // => Message{ data: [200, 300, 400], scope: {} }
```

`uppercase(string)` - convert string to upper case
```javascript
const test = uppercase(get(''))

test('wow!') // => Message{ data: 'WOW!', scope: {} }
```

`lowercase(string)` - convert string to lower case
```javascript
const test = lowercase(get(''))

test('WOW!') // => Message{ data: 'wow!', scope: {} }
```

`add(number1, number2)` - summate two numbers or concatenate two strings
```javascript
const test = add(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: 3, scope: {} }
test({ a: 'doge', b: 'wow!' }) // => Message{ data: 'dogewow!, scope: {} }
```

`subtract(number1, number2)` - subtract two numbers
```javascript
const test = subrtact(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: -1, scope: {} }
```

`multiply(number1, number2)` - multiply two numbers
```javascript
const test = multiply(get('a'), get('b'))

test({ a: 2, b: 5 }) // => Message{ data: 10, scope: {} }
```

`divide(number1, number2)` - divide numbers
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

`or(x, y)` - logical OR
```javascript
const test = or(get('a'), get('b'))

test({ a: true, b: false }) // => Message{ data: true, scope: {} }
test({ a: false, b: false }) // => Message{ data: false, scope: {} }
```

`xor(x, y)` - logical XOR
```javascript
const test = xor(get('a'), get('b'))

test({ a: false, b: false }) // => Message{ data: false, scope: {} }
test({ a: true, b: false }) // => Message{ data: true, scope: {} }
test({ a: false, b: true }) // => Message{ data: true, scope: {} }
test({ a: true, b: true }) // => Message{ data: false, scope: {} }
```

`eq(x, y)` - strict equality
```javascript
const test = eq(get('a'), get('b'))

test({ a: 2, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: false, scope: {} }
```

`neq(x, y)` - strict non-equality
```javascript
const test = neq(get('a'), get('b'))

test({ a: 2, b: 2 }) // => Message{ data: false, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: true, scope: {} }
```

`gt(x, y)` - greater than
```javascript
const test = gt(get('a'), get('b'))

test({ a: 2, b: 2 }) // => Message{ data: false, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: true, scope: {} }
```

`lt(x, y)` - less then
```javascript
const test = gt(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: false, scope: {} }
```

`gte(x, y)` - greater than or equal
```javascript
const test = gte(get('a'), get('b'))

test({ a: 0, b: 2 }) // => Message{ data: false, scope: {} }
test({ a: 2, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: true, scope: {} }
```

`lte(x, y)` - less than or equal
```javascript
const test = gt(get('a'), get('b'))

test({ a: 1, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 2, b: 2 }) // => Message{ data: true, scope: {} }
test({ a: 100, b: 2 }) // => Message{ data: false, scope: {} }
```

`isDefined(x)` - check if input is defined
```javascript
const test = isDefined(get(''))

test(100500) // => Message{ data: true, scope: {} }
test({ a: 2, b: 2 }) // => Message{ data: true, scope: {} }
test(undefined) // => Message{ data: false, scope: {} }
```

`isUndefined(x)` - check if input is undefined
```javascript
const test = isUndefined(get(''))

test(100500) // => Message{ data: false, scope: {} }
test({ a: 2, b: 2 }) // => Message{ data: false, scope: {} }
test(undefined) // => Message{ data: true, scope: {} }
```


## TODO
- More fragments (open for suggestions)
- Examples & demos
- Unit tests
- Performance optimization

## License

Apache 2 (see LICENSE file in the package directory)
