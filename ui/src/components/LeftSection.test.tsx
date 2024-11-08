import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import { LeftSection } from './LeftSection';

describe('LeftSection Component', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('renders correctly with epoch time', () => {
    const time = '1672500000000'; // Example epoch time
    render(<LeftSection time={time} />);

    const epochTimeElement = screen.getByText(`Epoch Time: ${time}`);
    expect(epochTimeElement).toBeInTheDocument();
  });

  test('calculates and updates time difference every second', () => {
    const time = 374499840000; // 10th December 1981
    jest.spyOn(Date, 'now').mockReturnValue(time);

    render(<LeftSection time={String(time)} />);

    const stopwatch = screen.getByTestId('stopwatch');
    expect(stopwatch).toBeInTheDocument();
    expect(stopwatch.textContent).toBe('Time Difference: 00:00:00'); // Starting value

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    jest.restoreAllMocks();
  });

  test('cleans up interval when component unmounts', () => {
    const time = '1672500000000';
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');
    const { unmount } = render(<LeftSection time={time} />);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });

});
