import winston from 'winston';

// Take the format helpers out of winston.format, so we can use them by name
const { printf, combine, timestamp, colorize } = winston.format;

// Layout of each line: 2026-09-28 11:27:42 |info|: message
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} | ${level}|  ${message}`;
});

export const logger = winston.createLogger({
  level: 'debug',

  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), myFormat),

  transports: [
    // Terminal: same layout, with colors (info green, warn yellow, error red)
    new winston.transports.Console({
      format: combine(colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), myFormat),
      level:'info'
    }),

    // Only errors
    new winston.transports.File({
      filename: 'logs/error.log', 
      level: 'error', 
      maxsize: 10 * 1024 * 1024,   // max 10 MB per file
      maxFiles: 5,
    }),

    // Everything
    new winston.transports.File({
      filename: 'logs/combined.log',
       maxsize: 10 * 1024 * 1024,   // max 10 MB per file
      maxFiles: 5,
    }),
  ],  
});

