import fetch from 'node-fetch';
import { message, get, set, lift } from '../src/sync'
import log from './log'

// Test data
const state = {}

const test = message.construct({ a: 'asd' }, state)

const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

// Lenses
const uppercase = lift(x => String(x).toUpperCase())
const pipe = (...funcs) => message.extend(
  input => funcs.reduce((acc, next) => next(acc), input)
)

// Test flows
const testFlow = pipe(get('a'), uppercase())

log(test)
log(testFlow(test))
