import React, { FC, useEffect, useState } from 'react'
import { StopWatch } from './StopWatch';

interface LeftSectionProps {
  time: string;
}

export const LeftSection: FC<LeftSectionProps> = ({ time }) => {
  const [serverTimeInMs, setServerTimeInMs] = useState<number>(0);
  const [timeDifference, setTimeDifference] = useState<number>(0);

  useEffect(() => {
    const serverTime = parseInt(time, 10);

    setServerTimeInMs(serverTime);

    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      setTimeDifference(currentTime - serverTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className='flex-1 p-8 font-bold' data-testid='left-section'>
      <h2 className='text-xl font-bold mb-4'>Current Server Time</h2>
      <p className='text-lg bg-teal-200 text-slate-600 px-4 py-5 rounded shadow-lg flex justify-center' data-testid="epoch-time">Epoch Time: { time }</p>
      <StopWatch seconds={Math.floor(timeDifference / 1000)} />
    </div>
  )
}
