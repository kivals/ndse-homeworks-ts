import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

function validationMiddleware(
  type: any,
  skipMissingProperties = false,
): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    const errors: ValidationError[] = await validate(
      plainToClass(type, req.body),
      { skipMissingProperties },
    );
    if (errors.length > 0) {
      const message = errors
        .map((error: ValidationError) => Object.values(error.constraints))
        .join(', ');
      next(HttpException.badRequest(message));
    } else {
      next();
    }
  };
}

export default validationMiddleware;
