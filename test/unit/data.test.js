import { data } from '../../src'
import { identity } from './cases'
import test from '../test'

test("data", ["returns data without changes", data, identity])
