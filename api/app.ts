import express, { Application, Request, Response } from 'express';
import { router as timeRoute } from './routes/time';
import epm from 'express-prometheus-middleware';
import { authoriseMetrics } from './middleware/authorisation';

const app: Application = express();
const port: number = 5050;

app.use('/time', timeRoute);
app.use('/metrics', authoriseMetrics);

app.use(
  epm({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  })
);

app.get('/', (request: Request, response: Response) => {
  response.send('Let\'s begin shall we');
});

// Only listen if we're not running in a test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
  });
}

export default app;
