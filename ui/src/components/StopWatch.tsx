import React, { FC } from 'react'

interface StopWatchProps {
  seconds: number;
}

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;

export const StopWatch: FC<StopWatchProps> = ({ seconds }) => {
  const hours = Math.floor(seconds / SECONDS_IN_HOUR);
  const minutes: number = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const secs = seconds % SECONDS_IN_MINUTE;

  return (
    <p data-testid="stopwatch" className="text-lg bg-teal-300 text-slate-700 px-4 py-5 rounded shadow-lg flex justify-center mt-4">
      Time Difference: {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`}
    </p>
  )
}
