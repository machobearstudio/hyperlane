const log = input => {
  if (input instanceof Promise) {
    return input.then(log)
  }

  console.log(input)

  return input
}

export default log
