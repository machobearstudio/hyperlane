import fetch from 'node-fetch'
import map from 'poly-map'
import { message, get, set, lift, all } from '../src'
import log from './log'

// Test data
const test = message.construct({ a: 'asd' }, { doge: 'wow' })

const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

// Lenses
const uppercase = lift(x => String(x).toUpperCase())

// Test flows
const testFlow = uppercase(getGithub())

log(testFlow(test))
