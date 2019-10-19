
class NotFoundError extends Error {
  public status: number

  constructor(error) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = error.message || 'There was a problem';
    this.status = error.status;
    this.stack = error.stack;
  }
}


export { NotFoundError };
