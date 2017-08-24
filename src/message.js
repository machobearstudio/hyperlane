function Message(data, scope) {
  this.data = data
  this.scope = scope || {}
}

export const isMessage = data => data instanceof Message

export const message = (data, scope) => {
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

export const extend = func => (input) => {
  const output = message(func(input))

  return message(
    output.data,
    { ...input.scope, ...output.scope }
  )
}
