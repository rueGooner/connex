import express, { Application } from 'express';
import { router as timeRoute } from './routes/time';

const app: Application = express();
const port: number = 5050;

app.use('/time', timeRoute);

// Only listen if we're not running in a test environment
if (process.env.NODE_ENV !== 'test') {
  const port = 5050; // Or whatever port you'd like
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
  });
}

export default app;
