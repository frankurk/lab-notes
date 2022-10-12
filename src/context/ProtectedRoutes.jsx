import React from 'react';
import { Navigate } from 'react-router-dom';

// AUTH OBSERVER
const ProtectedRoutes = ({ children }) => {
  const user = localStorage.getItem('userUid');
  if (!user) return <Navigate to='/' />;
  return children;
};

export default ProtectedRoutes;
