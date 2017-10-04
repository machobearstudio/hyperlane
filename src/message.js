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

export const combine = (input, output) =>
  construct(output.data, { ...input.scope, ...output.scope })

export const extend = func => input => combine(input, construct(func(input)))

export const lift = func => (...args) => {
  const scope = args.reduce(combine, construct()).scope
  const parameters = args.map(extract)

  return construct(func.apply(undefined, parameters), scope)
}
