import React, { FC } from 'react'

interface RightSectionProps {
  metrics: string | undefined;
}

export const RightSection: FC<RightSectionProps> = ({metrics}) => {
  return (
    <div className='flex-1 p-9 bg-green-100'>
      <h2 className='text-xl font-bold'>Prometheus Metrics</h2>
      <div className='mt-4 bg-gray-100 p-4 rounded-lg overflow-auto max-h-[calc(100vh-300px)] shadow-lg'>
        {metrics ?
          <pre className='whitespace-pre-wrap'>
            {metrics}
          </pre> :
          <p data-testid='fallback-text'>Metrics not available</p>
        }
      </div>
    </div>
  )
}
