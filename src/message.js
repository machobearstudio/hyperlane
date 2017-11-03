import map from 'poly-map'

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

export const collect = messages => {
  const inputs = map(construct, messages)

  return construct(
    map(extract, inputs),
    Object.values(inputs).reduce(combine, construct()).scope
  )
}

export const spread = input => map(item => construct(item, input.scope), extract(input))

export const applicator = func => (...inputs) => {
  const collected = collect(inputs.map(construct))
  const output = combine(collected, construct(func.apply(undefined, extract(collected))))

  return (output.data instanceof Promise
    ? output.data.then(data => construct(data, output.scope))
    : output
  )
}
