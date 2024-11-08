import React from 'react';
import logo from './logo.svg';
import './index.css';
import { useMetricsData } from './hooks/useMetricsData';
import { LeftSection } from './components/LeftSection';
import { RightSection } from './components/RightSection';

function App() {
  const { responseData, loading, error } = useMetricsData();

  console.log({ responseData, loading, error })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-slate-100 flex h-screen">
      {responseData?.time && <LeftSection time={responseData.time} />}
      {responseData?.metrics && <RightSection metrics={responseData.metrics} />}
    </div>
  );
}

export default App;
