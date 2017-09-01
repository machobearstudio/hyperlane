import * as message from './message'
import getM from './get'
import setM from './set'
import flow from './flow'

const get = flow(getM)
const set = flow(setM)

export { message, get, set, flow }
