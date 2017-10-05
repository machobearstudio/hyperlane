import map from 'poly-map'
import pipe from 'function-pipe'

function Message(data, scope) {
  this.data = data
  this.scope = scope || {}
}

export const isMessage = data => data instanceof Message

export const construct = (data, scope) => {
  if (data instanceof Message) {
    return data
  }

  if (data instanceof Promise) {
    return data.then(resolved => construct(resolved, scope))
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

export const collect = messages => construct(
  map(extract, messages),
  Object.values(messages).reduce(combine, construct()).scope
)

export const spread = input => map(item => construct(item, input.scope), extract(input))

export const extend = func => input => combine(input, construct(func(input)))

export const applicator = func => input => combine(input, construct(func.apply(undefined, extract(input))))
