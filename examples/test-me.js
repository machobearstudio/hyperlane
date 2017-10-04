import fetch from 'node-fetch'
import map from 'poly-map'
import { message, get, set, lift, all, call, when } from '../src/sync'
import log from './log'

// const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

// // Lenses
const uppercase = call(message.extend(x => String(message.extract(x)).toUpperCase()))

// Test data
const test = message.construct({ a: 'doge' }, { doge: 'wow' })
const c = x => () => x

// Test flows
const a = get(get(c('a')))
const testFlow = when(get(c('a')), a, uppercase(a))

log(testFlow(test))
