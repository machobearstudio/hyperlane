import https from 'https'
import nodeFetch from 'node-fetch'
import { lift, chain, get, set, map, filter, eq, object } from '../src'

// Promise logger
const log = x=> x.then(y => { console.log(y.data); return y })

// Generic HTTP readers
const agent = new https.Agent({ rejectUnauthorized: false })
const fetch = lift(url => nodeFetch(url, { agent }).then(res => res.text()))
const readJson = lift(data => JSON.parse(String(data)))

// A bit more specific API communication fragments
const fetchEntity = url => readJson(fetch(url))
const fetchCollection = url => get('results', readJson(fetch(url)))

// Fetch all people data and then fetch homeworld data
// for each character from a separate URL
const peopleHomeworlds = chain(
  fetchCollection('https://swapi.co/api/people'),
  map({
    name: get('name'),
    homeworld: get('name', fetchEntity(get('homeworld')))
  })
)

// Fetch character names and homeworlds and then
// filter the results by homeworld name
const whosFrom = chain(
  set('planet', get('')),
  peopleHomeworlds,
  filter(eq(get('homeworld'), get('planet')))
)

log(peopleHomeworlds()) // lists Star War characters with their homeworlds
log(whosFrom('Tatooine')) // lists Star War characters from Tatooine
