import constant from './constant'

const autoConstants = func => (...args) => func(
  ...args.map(arg => (
    typeof arg !== 'function' ? constant(arg) : arg
  ))
)

export default autoConstants
