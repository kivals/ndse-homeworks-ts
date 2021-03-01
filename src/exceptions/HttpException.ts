class HttpException {
  constructor(public code: number, public message: string) {}

  static badRequest(message: string): HttpException {
    return new HttpException(400, message);
  }

  static unAuthorized(message: string): HttpException {
    return new HttpException(401, message);
  }

  static forbidden(message: string): HttpException {
    return new HttpException(403, message);
  }

  static notFound(message: string): HttpException {
    return new HttpException(404, message);
  }

  static internal(message: string): HttpException {
    return new HttpException(500, message);
  }
}

export default HttpException;
