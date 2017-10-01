import * as message from './message'
import createDictionary from './dictionary'

const dictionary = createDictionary({
  flow: 'async'
})

export const { get, set, lift, not, and, or } = dictionary

export { message, createDictionary }

export default dictionary
