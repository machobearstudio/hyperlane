import event from 'simple-event'
import uuid from 'uuid'

class Bus {
  constructor() {
    this.event = event()
  }

  get nextId() {
    return uuid.v4()
  }

  on(type, func) {
    const handler = (type === '*'
      ? m => func(m.payload, m.type)
      : m => (m.type === type ? func(m.payload, m.type) : undefined)
    )

    this.event.subscribe(handler)
  }

  dispatch(type, payload) {
    if (payload instanceof Promise) {
      payload.then(x => this.event.emit({ type, payload: x }))
    } else if (payload !== undefined) {
      this.event.emit({ type, payload })
    }
  }
}

export default Bus
