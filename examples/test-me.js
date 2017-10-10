import fetch from 'node-fetch'
import { message, get, set, lift, all, call, when, chain, add, multiply, map } from '../src'
import log from './log'

const uppercase = lift(x => String(x).toUpperCase())

// Test data
const test = message.construct({ a: 1, b: 2 }, { doge: 'wow' })
const testCollection = message.construct([{ z: 'doge' }, { z: 'wow!' }], { doge: 'wow' })

// Basic flows
log(get('doge')(test))
log(add(get('a'), get('b'))(test))
log(uppercase(get('doge'))(test))
log(chain(get('doge'), uppercase)(test))
log(all(chain(get('doge'), uppercase), add(get('a'), get('b')))(test))
log(when(get('doge'), add(get('a'), get('b')), 'nope')(test))
log(when(get('nothing'), add(get('a'), get('b')), 'nope')(test))
log(map(get('z'))(testCollection))

// HTTP GET
const httpGet = lift(url => fetch(url).then(res => typeof res.text()))
const getGithub = httpGet('https://github.com/')

log(getGithub(test))
