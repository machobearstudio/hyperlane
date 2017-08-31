import util from 'util'

const log = object => console.log(util.inspect(object, {
  depth: null,
  colors: true
}))

export default log