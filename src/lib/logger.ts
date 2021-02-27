import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.colorize(),
    format.simple(),
  ),
  defaultMeta: { service: 'book-application' },
  transports: [new transports.Console()],
});

export default logger;
