import fetch from 'node-fetch'
import { configure, message, either, lense, scope, get, set, lift, pass, all, object, array, call, when, chain, add, multiply, map, eq, filter, head, tail, uppercase, concat, push } from '../src'
import log from './log'

// Test data
const test = message({ a: 1, b: 2 }, { doge: 'wow' })
const testCollection = [{ z: 'doge' }, { z: 'wow!' }]
const testHashmap = { a: { z: 'doge' }, b: { z: 'wow!' } }

// Basic flows
configure({ transport: 'sync' })

const doge = lense('doge')

log(either(get('a'), doge)(test))
log(either(get('f'), doge)(test))
log(doge.set('such much!!!!')(test))
log(get('doge')(test))
log(add(get('a'), get('b'))(test))
log(add('a', 'b')(test))
log(uppercase(get('doge'))(test))
log(chain(get('doge'), uppercase)(test))
log(all(chain(get('doge'), uppercase), add(get('a'), get('b')))(test))
log(when(get('doge'), add(get('a'), get('b')), 'nope')(test))
log(when(get('nothing'), add(get('a'), get('b')), 'nope')(test))
log(map(get('z'))(testCollection))
log(map(get('z'))(testHashmap))
log(push(get(''), { z: 100500 })(testCollection))
log(concat(get(''), [{ z: 200300 }])(testCollection))
log(head(get(''))(testCollection))
log(tail(get(''))(testCollection))
log(filter(eq(get('z'), 'doge'))(testCollection))
log(filter(eq(get('z'), 'doge'))(testHashmap))

// HTTP GET
configure({ transport: 'async' })

const httpGet = lift(url => fetch(url).then(res => res.text()).then(x => x.length))
const getGithub = httpGet('https://github.com/')

log(getGithub(test))
