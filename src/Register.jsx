
import React, { useState } from 'react';
import { FaUser, FaLock, FaCheck } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Register = ({ setIsLoggedIn, setUserEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
    } else if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
    } else {
      setError('');
      setIsLoggedIn(true);
      setUserEmail(email);
      alert(`Cadastro de ${email} realizado com sucesso! (Simulação)`);
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 md:mb-6 animate-fade-in">Crie sua Conta! 🎾</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-2 md:mb-4 text-center animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
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
          <div className="relative">
            <FaCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar Senha"
              className="w-full pl-10 pr-4 py-2 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 text-sm md:text-base"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 md:py-2 rounded-lg hover:bg-green-600 transition duration-200 font-semibold text-sm md:text-base"
          >
            Cadastrar
          </button>
        </form>

        <p className="mt-4 text-center text-xs md:text-sm text-gray-500">
          Já tem uma conta? <Link to="/" className="text-green-500 hover:underline transition duration-200 hover:text-green-600">Faça Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
