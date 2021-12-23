import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppHomePage } from './core/layout/AppHomePage';

const App: React.FC = () => {
  const queryClient = new QueryClient()
  return (
<QueryClientProvider client={queryClient}>
    <AppHomePage />
    </QueryClientProvider>
  )
}

export default App