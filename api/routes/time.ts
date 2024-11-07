import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (request: Request, response: Response): void => {
  const epochTime: number = Date.now();
  response.json({
    time: epochTime
  })
})

export { router };
