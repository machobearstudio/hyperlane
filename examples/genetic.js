import util from 'util'
import equal from 'deep-equal'
import polyMap from 'poly-map'
import { message, lift, get, set, chain, all, map, when, data, push, eq, add, head, tail, either, uppercase, lowercase } from '../src'

const log = lift(y => {
  console.log(util.inspect(y, { showHidden: false, depth: null, colors: true }))
  return y
})

const pair   = lift((x, y) => [x, y])
const left   = lift(([x, y]) => x)
const right  = lift(([x, y]) => y)
const count  = lift(array => array.length)
const splice = lift((index, array) => array.splice(index, 1))
const random = lift((limit) => Math.round(Math.random() * limit, 0))
const choice = lift((condition, options) => options[condition])
const repeat = (times, sequence) => all(...(new Array(times)).fill(sequence))
const apply  = (f, args) => f(...args)

const genepool = {
  get: get,
  uppercase: uppercase,
  lowercase: lowercase,
  chain: chain,
  all: all,
  either: either,
  data: data
}
const genes = Object.keys(genepool)

const newGene = choice(random(genes.length - 1), genes)

const gene = either(left, 'noop')
const args = either(right, [])

const pretty = add(gene, chain(
  add(add('(', chain(args, map(x => pretty(x)))), ')'),
  when(eq('()'), '', data)
))

const compile = apply(gene, chain(args, map(x => compile(x))))

const pass = data
const change = pair(newGene, args)
const shrink = pair(gene, chain(args, splice(random(count))), [])
const append = pair(gene, push(args, pair(newGene, [])))
const mutate =
  when(eq(0, random(3)), pass,
  when(eq(1, random(3)), change,
  when(eq(2, random(3)), shrink,
  when(eq(3, random(3)), append))))

const replicate = chain(
  mutate,
  pair(left, chain(args, map(x => replicate(x))))
)

const seed = message(['chain', [['data', []], ['uppercase', []]]])
const input = message('wow such much!')

const generation = log(chain(repeat(10, replicate), map(pretty)))

generation(seed)