
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login.jsx';
import Admin from './Admin.jsx';
import Register from './Register.jsx';
import Live from './Live.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    navigate('/admin'); // Redireciona para /admin ao sair do Live
  };

  return (
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />} />
      <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />} />
      <Route
        path="/admin"
        element={isLoggedIn ? <Admin isLoggedIn={isLoggedIn} userEmail={userEmail} onLogout={handleLogout} navigate={navigate} /> : <Navigate to="/" />}
      />
      <Route
        path="/live"
        element={isLoggedIn ? <Live isLoggedIn={isLoggedIn} userEmail={userEmail} onLogout={handleLogout} /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
