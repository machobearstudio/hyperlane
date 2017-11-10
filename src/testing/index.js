import equal from 'deep-equal'
import { configure } from '../index'
export { default as log } from './log'
export { default as assert } from './assert'
export { default as testCase } from './test-case'

const run = f => f()

const summarize = results => results.reduce((acc, next) => {
  acc[(next.success ? 'passed' : 'failed')].push(next.description)
  acc.log.push(next)
  return acc
}, { passed: [], failed: [], log: [] })

export const suite = (name, ...cases) => (config) => {
  config && configure(config)

  return Promise
    .all(cases.map(run))
    .then(summarize)
    .then(results => ({
      name,
      success: results.failed.length === 0,
      ...results
    }))
}
