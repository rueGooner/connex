import { useState, useEffect } from 'react';

interface MetricsResponse {
  time: string | null;
  metrics: string | null;
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URI;
const REQUEST_INTERVAL = process.env.REACT_APP_REQUEST_INTERVAL || 30000;

export const useMetricsData = () => {
  const [responseData, setResponseData] = useState<MetricsResponse>({
    time: null,
    metrics: null
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const [hmm, timeResponse, metricsResponse] = await Promise.all([
        fetch(`${API_BASE_URL}`, {
          headers: {
            authorization: 'mysecrettoken'
          }
        }),
        fetch(`${API_BASE_URL}/time`, {
          headers: {
            authorization: 'mysecrettoken'
          }
        }),
        fetch(`${API_BASE_URL}/metrics`, {
          headers: {
            authorization: 'mysecrettoken'
          }
        })
      ]);

      if (!timeResponse.ok || !metricsResponse.ok) {
        throw new Error('Failed to fetch data from the server');
      }

      // Parse the responses
      const timeData = await timeResponse.json();
      console.log(timeData);
      const metricsData = await metricsResponse.text();

      setResponseData({
        time: timeData.time,
        metrics: metricsData
      });
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();

    if (Number(REQUEST_INTERVAL) > 0) {
      const intervalId = setInterval(fetchData, Number(REQUEST_INTERVAL));

      return () => clearInterval(intervalId);
    }
  }, []);

  return {
    responseData,
    loading,
    error
  }
}
