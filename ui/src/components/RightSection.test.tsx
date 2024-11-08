import React from 'react';
import { render, screen } from '@testing-library/react';
import { RightSection } from './RightSection';

const mockMetrics = `
# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 0.000238835
go_gc_duration_seconds{quantile="0.25"} 0.000284459
go_gc_duration_seconds{quantile="0.5"} 0.000388322
go_gc_duration_seconds{quantile="0.75"} 0.000526528
go_gc_duration_seconds{quantile="1"} 0.000650776
go_gc_duration_seconds_sum 0.001588627
go_gc_duration_seconds_count 5
`;

describe('<RightSection />', () => {
  it('renders correctly with no metrics', () => {
    render(<RightSection metrics={undefined} />);
    expect(screen.getByTestId('fallback-text')).toBeInTheDocument();
  });

  test('renders correctly with metrics', () => {
    render(<RightSection metrics={mockMetrics} />);

    const metricsText = screen.getByText(/go_gc_duration_seconds/);
    expect(metricsText).toBeInTheDocument();
  });
})
