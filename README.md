# hyperlane
Context-dependent functional style computation

## Description
This tool allows to construct computation pipelines heavily inspired by Haskell's 'do-notation'. All pipeline fragments are pure, computation state (context) is isolated in as a part of the data flowing through the pipeline.

## Features
- Automatically supports synchronous and asyncronous functions
- Allows for lifting any pure function into computation context
- Composable structure allows to add other aspects to the pipeline fragments

## Installation

```
npm install hyperlane
```

## Usage

```javascript
import { message, get, set, lift } from 'hyperlane'

const summate = (x, y) => x + y
const sum = lift(summate)

const logger = object => console.log(object)
const log = lift(logger)

const testMessage = message.construct({ a: 100, b: 200 }, state)

// Test flows
const testFlow = set(
  'summ',
  sum(get('a'), get('b'))
)

log(testFlow(testMessage))
```
