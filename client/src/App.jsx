import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CareerRecommendation from './components/CareerRecommendation';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <h1>Career Path AI</h1> */}
        <CareerRecommendation />
      </div>
    </QueryClientProvider>
  );
};

export default App;
