import { data } from '../../src'
import { identity, maybe, dataPropertyRead, dataDeepRead, scopeInvisible } from './cases'
import test from '../test'

test("data", ["returns data without changes", data, identity])

test(
  "data.get(location: constant)",

  ["reads data by name", data.get('doge'), dataPropertyRead],
  ["reads data by deep path", data.get('doge.such.much'), dataDeepRead],
  ["reads data by deep path as array", data.get(['doge', 'such', 'much']), dataDeepRead],

  ["can't read scope", data.get('doge'), scopeInvisible],

  ["returns data without changes when provided an empty string as location", data.get(''), identity],
  ["returns undefined if no property found", data.get('nothing.like.this'), maybe]
)
