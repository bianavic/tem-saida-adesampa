
import { InvalidArgumentError, InternalServerError, NotFoundError } from '../errors/index';

const build = (statusCode, body = undefined) => ({
  error: body,
});

const notFound = (body) => build(404, body);
const success = (body) => build(200, body);
const errors = (body) => {
  let errorBody = {};
  if (body instanceof InvalidArgumentError) {
    errorBody = build(422, {
      statusCode: 422,
      errors: [{ error: body.name, errorCode: body.status, message: body.message }],
    });
  } else if (body instanceof NotFoundError) {
    errorBody = notFound(body);
  } else if (body instanceof InternalServerError) {
    errorBody = build(500, {
      statusCode: 500,
      errors: [{ error: body.name, errorCode: body.stack, message: body.message }],
    });
  } else {
    const err = {
      statusCode: 500,
      errors: [{ error: 'InternalServerError', errorCode: 500, message: body }],
    };

    errorBody = build(500, err);
  }

  return errorBody;
};

export {
  success,
  errors,
  notFound,
};
