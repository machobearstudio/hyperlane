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

export const collapse = ({ data, scope }) => ({ ...scope, ...data })
export const merge = (input, output) => message(
  output.data,
  { ...input.scope, ...output.scope }
)

export const collect = messages => messages.reduce(
  (acc, next) => {
    acc.scope = { ...acc.scope, ...next.scope }

    if (next.data !== undefined) {
      acc.data.push(next.data)
    }

    return acc
  }, message([])
)

export const extend = func => input =>
  merge(input, message(func(input)))

export const apply = func => (...inputs) => {
  const input = collect(inputs)

  return merge(input, message(func.apply(undefined, input.data)))
}
