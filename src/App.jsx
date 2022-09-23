import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRouter from './navigation/Routes';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
