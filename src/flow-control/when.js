import { extract } from '../core'

const when = (check, success, fail) => input => (
  extract(check(input)) ? success(input) : fail(input)
)

export default when
