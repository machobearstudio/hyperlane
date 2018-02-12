import { read, write } from '../path'

function Message(data, scope) {
  this.data = data
  this.scope = scope || {}
}

export const isInstance = data => data instanceof Message

export const construct = (data, scope) => {
  if (data instanceof Message) {
    return data
  }

  return new Message(data, scope)
}

export const extract = input => (isInstance(input) ? input.data : input)

export const collapse = input => (isInstance(input)
  ?  ({ data: input.data, scope: input.scope })
  :  ({ data: input, scope: {} })
)

export const combine = (input, output) =>
  construct(output.data, { ...input.scope, ...output.scope })

export const extend = func => input =>
  combine(input, construct(func(input)))

export const get = (location, input) => {
  const path = extract(location)
  if (path === '') {
    return input
  }

  let value = read(path, input.data)
  if (value === undefined) {
    value = read(path, input.scope)
  }

  return construct(value, input.scope)
}

export const set = (location, value, input) =>
  construct(input.data, write(extract(location), extract(value), input.scope))
