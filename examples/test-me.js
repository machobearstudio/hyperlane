import fetch from 'node-fetch'
import map from 'poly-map'
import { message, get, set, lift, all } from '../src'
import log from './log'

// const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

// // Lenses
// const uppercase = lift(x => String(x).toUpperCase())

// Test data
const test = message.construct({ a: 'doge' }, { doge: 'wow' })

// Test flows
const testFlow = set('b', get(get('a')))

log(testFlow(test))
