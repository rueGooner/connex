import {Request, Response, NextFunction } from 'express';

export const authoriseMetrics = (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers['authorization'];

  if (token !== 'mysecrettoken') {
    response.status(403).json({ error: 'Forbidden' });
  } else {
    next();
  }
}
