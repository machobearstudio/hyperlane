const when = (reducer, [condition, yes, no = () => undefined]) => input => (
  reducer(condition(input)) ? yes(input) : no(input)
)

export default when
