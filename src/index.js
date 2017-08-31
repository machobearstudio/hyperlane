import { message, get as getM, set as setM } from './message'
import flow from './flow'

const get = flow(getM)
const set = flow(setM)

export { message, get, set, flow }
