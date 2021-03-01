import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';
import logger from '../lib/logger';

export default function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  logger.error(error);
  const code = error.code || 500;
  const message = error.message || 'Internal server error';
  response.status(code).json({
    error: message,
    status: 'error',
  });
}
