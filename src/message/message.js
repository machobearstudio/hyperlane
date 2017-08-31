function Message(data, scope) {
  this.data = data
  this.scope = scope || {}
}

export const isMessage = data => data instanceof Message

export const construct = (data, scope) => {
  if (data instanceof Message) {
    return data
  }

  return new Message(data, scope)
}

export const extract = (input) => {
  if (input instanceof Message) {
    return input.data
  }

  return input
}

export const merge = (input, output) =>
  construct(output.data, { ...input.scope, ...output.scope })

export const extend = func => {
  const wrappedFunc = (...inputs) => inputs
    .concat([construct(func(...inputs))])
    .reduce(merge, construct())

  wrappedFunc.arity = func.length

  return wrappedFunc
}

export const lift = func => extend((...inputs) =>
  func(...inputs.map(extract))
)
