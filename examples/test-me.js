import fetch from 'node-fetch';
import { message, get, set, not, and, or, lift } from '../src'
import log from './log'

// Test data
const state = {}

const test = message.construct({ a: true, b: false }, state)

const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

// Lenses
const summate = (x, y) => x + y
const sum = lift(summate)

// Test flows
const testFlow = and(get('a'), get('b'))

log(test)
log(testFlow(test))
