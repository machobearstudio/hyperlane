import fetch from 'node-fetch'
import map from 'poly-map'
import { message, get, set, lift, all, call, when, chain, add } from '../src'
import log from './log'

const getGithub = lift(() => fetch('https://github.com/').then(res => typeof res.text()))

// // Lenses
const uppercase = lift(x => String(x).toUpperCase())

// Test data
const test = message.construct({ a: 1, b: 2 }, { doge: 'wow' })

// Test flows
const testFlow = add(get('a'), get('b'))
// const testFlow = getGithub()

const result = testFlow(test)
log(result)

// const up = message.lift(x => String(x).toUpperCase())
// log(up(test))
