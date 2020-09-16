export default class DomainError extends Error {
  constructor(message) {
    super(message)

    this.name = this.constructor.name
    this.data = { message }

    Error.captureStackTrace(this, this.constructor)
  }
}
