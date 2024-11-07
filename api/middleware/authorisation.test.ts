import { authoriseMetrics } from './authorisation';
import { Request, Response, NextFunction } from 'express';

describe('authoriseMetrics Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  const nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test to prevent shared state
  });

  it('should call next() when authorization token is correct', () => {
    mockRequest = {
      headers: { authorization: 'mysecrettoken' },
    };

    authoriseMetrics(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
    expect(mockResponse.status).not.toHaveBeenCalled();
  });

  it('should return 403 when authorization token is incorrect', () => {
    mockRequest = {
      headers: { authorization: 'invalidtoken' },
    };

    authoriseMetrics(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Forbidden' });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('should return 403 when authorization header is missing', () => {
    mockRequest = {
      headers: {},
    };

    authoriseMetrics(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Forbidden' });
    expect(nextFunction).not.toHaveBeenCalled();
  });
});
