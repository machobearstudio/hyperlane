var curry = require('curry')

function callWith(input, handler) {
  return handler(input)
}

module.exports = curry(callWith);
