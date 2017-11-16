import { scope, message } from '../../src'
import { scopeExposed, maybe, scopePropertyRead, scopeDeepRead, dataInvisible } from './cases'
import test from '../test'

test("scope", ["exposes scope as data", scope, scopeExposed])

test(
  "scope.get(location: constant)",

  ["can't read data", scope.get('doge'), dataInvisible],

  ["reads scope by name", scope.get('doge'), scopePropertyRead],
  ["reads scope by deep path", scope.get('doge.such.much'), scopeDeepRead],
  ["reads scope by deep path as array", scope.get(['doge', 'such', 'much']), scopeDeepRead],

  ["exposes scope as data", scope.get(''), scopeExposed],
  ["returns undefined if no property found", scope.get('nothing.like.this'), maybe]
)
