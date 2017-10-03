import fetch from 'node-fetch'
import map from 'poly-map'
import { message, get, set, lift, all, fragment } from '../src/sync'
import log from './log'

// Test data
const test = { a: 'asd' }

const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

// Lenses
const uppercase = lift(x => String(x).toUpperCase())

// Test flows
const testFlow = all(
  get('a'),
  uppercase(get('a'))
)

log(test)
log(testFlow(test))
