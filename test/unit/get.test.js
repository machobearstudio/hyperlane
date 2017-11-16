import { get } from '../../src'
import { identity, maybe, dataPropertyRead, dataDeepRead, scopePropertyRead, scopeDeepRead } from './cases'
import test from '../test'

test(
  "get(location: constant)",

  ["reads data by name", get('doge'), dataPropertyRead],
  ["reads data by deep path", get('doge.such.much'), dataDeepRead],
  ["reads data by deep path as array", get(['doge', 'such', 'much']), dataDeepRead],

  ["reads scope by name", get('doge'), scopePropertyRead],
  ["reads scope by deep path", get('doge.such.much'), scopeDeepRead],
  ["reads scope by deep path as array", get(['doge', 'such', 'much']), scopeDeepRead],

  ["returns data without changes when provided an empty string as location", get(''), identity],
  ["returns undefined if no property found", get('nothing.like.this'), maybe]
)
