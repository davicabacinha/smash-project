
import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setUserEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, preencha e-mail e senha.');
    } else {
      setError('');
      setIsLoggedIn(true);
      setUserEmail(email);
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-4 relative overflow-hidden">
      <img
        src="/logo-smash-V1-500x250-black.svg"
        alt="Smash Logo Top"
        className="absolute top-6 left-1/2 transform -translate-x-1/2 w-48 md:w-72 opacity-80 z-10"
      />

      <div className="relative z-20 w-full max-w-md md:max-w-lg bg-white rounded-xl shadow-2xl p-4 md:p-8 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 md:mb-6 animate-fade-in">Bem-vindo! 🎾</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-2 md:mb-4 text-center animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-4 md:space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="w-full pl-10 pr-4 py-2 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 text-sm md:text-base"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="w-full pl-10 pr-4 py-2 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 text-sm md:text-base"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 md:py-2 rounded-lg hover:bg-green-600 transition duration-200 font-semibold text-sm md:text-base"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-center text-xs md:text-sm text-gray-500">
          Ainda não tem conta? <Link to="/register" className="text-green-500 hover:underline transition duration-200 hover:text-green-600">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
