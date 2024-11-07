import request from 'supertest';
import app from '../app';

describe('GET /time endpoint', () => {
  it('should return the current epoch time', async () => {
    const response = await request(app).get('/time');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('time');
    expect(typeof response.body.time).toBe('number');
  })
})
