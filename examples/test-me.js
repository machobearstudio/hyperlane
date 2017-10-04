import fetch from 'node-fetch'
import map from 'poly-map'
import { message, get, set, lift, all, call, when, chain, add } from '../src/sync'
import log from './log'

// const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

// // Lenses
const uppercase = lift(x => String(x).toUpperCase())

// Test data
const test = message.construct({ a: 1, b: 2 }, { doge: 'wow' })

// Test flows
const testFlow =
  add(get('a'), get('b'))


log(testFlow(test))

// const up = message.lift(x => String(x).toUpperCase())
// log(up(test))
