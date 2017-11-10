import { configure } from '../index'

const suite = (name, ...scenarios) => (config) => {
  config && configure(config)

  return Promise
    .all(scenarios.map(scenario => scenario(config)))
}

export default suite
