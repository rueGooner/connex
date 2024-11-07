import express, { Application } from 'express';
import { router as timeRoute } from './routes/time';

const app: Application = express();
const port: number = 5050;

app.use('/time', timeRoute);

app.listen(port, () => {
  console.log(`Running tings on http://localhost:${port}`);
});
