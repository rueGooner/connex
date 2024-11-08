import React from 'react';
import logo from './logo.svg';
import './index.css';
import { useMetricsData } from './hooks/useMetricsData';

function App() {
  const { responseData, loading, error } = useMetricsData();
  console.log({ responseData, loading, error })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App bg-red-400">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
