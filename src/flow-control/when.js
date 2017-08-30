import { extract } from '../message'

const when = (check, success, fail) => input => (
  extract(check(input)) ? success(input) : fail(input)
)

export default when
