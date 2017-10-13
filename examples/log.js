import util from 'util'

const log = object => {
  if (object instanceof Promise) {
    return object.then(log)
  }

  console.log(util.inspect(object, { depth: null, colors: true }))
}

export default log