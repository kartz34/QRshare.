import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import RetrieveQR from './components/RetrieveQR';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          !isAuthenticated ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Navigate to="/home" replace />
          )
        } 
      />
      <Route 
        path="/home" 
        element={
          isAuthenticated ? (
            <HomePage />
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route 
        path="/guest" 
        element={<HomePage />} 
      />
      <Route 
        path="/retrieve-qr" 
        element={<RetrieveQR />} 
      />
    </Routes>
  );
}

export default App;