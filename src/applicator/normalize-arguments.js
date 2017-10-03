const identity = x => x

const normalizeArguments = (arity, params) => (
  arity ===0 || arity > params.length ? params.concat([identity]) : params
)

export default normalizeArguments
