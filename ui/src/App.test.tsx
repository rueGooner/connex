import { render, screen } from '@testing-library/react';
import App from './App';
import { useMetricsData } from './hooks/useMetricsData';

jest.mock('./hooks/useMetricsData');

describe('App Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('renders LeftSection when responseData contains time', async () => {
    const mockData = {
      time: '1672500000000',
      metrics: 'metric1 100\nmetric2 200',
    };

    (useMetricsData as jest.Mock).mockReturnValue({
      responseData: mockData,
      loading: false,
      error: null,
    });

    render(<App />);

    expect(screen.getByTestId('left-section')).toBeInTheDocument();
  });

  test('renders RightSection when responseData contains metrics', async () => {
    const mockData = {
      time: '1672500000000',
      metrics: 'metric1 100\nmetric2 200',
    };

    (useMetricsData as jest.Mock).mockReturnValue({
      responseData: mockData,
      loading: false,
      error: null,
    });

    render(<App />);

    expect(screen.getByTestId('right-section')).toBeInTheDocument();
  });

  test('shows loading message when data is loading', () => {
    (useMetricsData as jest.Mock).mockReturnValue({
      responseData: null,
      loading: true,
      error: null,
    });

    render(<App />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('shows error message when there is an error', () => {
    (useMetricsData as jest.Mock).mockReturnValue({
      responseData: null,
      loading: false,
      error: 'Error fetching data',
    });

    render(<App />);

    expect(screen.getByText(/Error: Error fetching data/i)).toBeInTheDocument();
  });
});
