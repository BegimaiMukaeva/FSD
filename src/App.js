import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:postId" element={<PostDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
