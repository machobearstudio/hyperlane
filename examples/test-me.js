import fetch from 'node-fetch'
import { message, get, set, lift, all, object, array, call, when, chain, add, multiply, map, eq, filter, head, tail, uppercase, concat, push } from '../src'
import log from './log'

// Test data
const test = message({ a: 1, b: 2 }, { doge: 'wow' })
const testCollection = message([{ z: 'doge' }, { z: 'wow!' }], { doge: 'wow' })
const testHashmap = message({ a: { z: 'doge' }, b: { z: 'wow!' } }, { doge: 'wow' })

// // Basic flows
log(get('doge')(test))
log(add(get('a'), get('b'))(test))
log(add('a', 'b')(test))
log(uppercase(get('doge'))(test))
log(chain(get('doge'), uppercase)(test))
log(all(chain(get('doge'), uppercase), add(get('a'), get('b')))(test))
log(object({ doge: get('doge'), summ: add(get('a'), get('b')) })(test))
log(when(get('doge'), add(get('a'), get('b')), 'nope')(test))
log(when(get('nothing'), add(get('a'), get('b')), 'nope')(test))
log(map(get('z'))(testCollection))
log(map(get('z'))(testHashmap))
log(push(get(''), object({ z: 100500 }))(testCollection))
log(concat(get(''), array(object({ z: 200300 })))(testCollection))
log(head(get(''))(testCollection))
log(tail(get(''))(testCollection))
log(head(get(''))(testHashmap))
log(tail(get(''))(testHashmap))
log(filter(eq(get('z'), 'doge'))(testCollection))
log(filter(eq(get('z'), 'doge'))(testHashmap))

// // // HTTP GET
const httpGet = lift(url => fetch(url).then(res => res.text()).then(x => x.length))
const getGithub = httpGet('https://github.com/')

log(getGithub(test))
