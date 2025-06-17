
import React, { useState, useEffect } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Live = ({ isLoggedIn, userEmail, onLogout }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [scores, setScores] = useState({
    'match1': { player1: 0, player2: 0 },
    'match2': { player1: 0, player2: 0 },
    'match3': { player1: 0, player2: 0 },
    'match4': { player1: 0, player2: 0 },
  });

  const matches = [
    { id: 'match1', tournament: 'Torneio A', player1: 'João', player2: 'Maria', time: '14:00', court: 'Quadra 1' },
    { id: 'match2', tournament: 'Torneio B', player1: 'Pedro', player2: 'Ana', time: '15:00', court: 'Quadra 2' },
    { id: 'match3', tournament: 'Torneio C', player1: 'Lucas', player2: 'Julia', time: '16:00', court: 'Quadra 1' },
    { id: 'match4', tournament: 'Torneio D', player1: 'Carlos', player2: 'Sofia', time: '17:00', court: 'Quadra 2' },
  ];

  // Simulação de atualização em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setScores((prev) => {
        const newScores = { ...prev };
        const matchId = selectedMatch || 'match1';
        newScores[matchId] = {
          player1: prev[matchId].player1 + (Math.random() < 0.5 ? 0 : 1),
          player2: prev[matchId].player2 + (Math.random() < 0.5 ? 0 : 1),
        };
        return newScores;
      });
    }, 2000); // Atualiza a cada 2 segundos
    return () => clearInterval(interval);
  }, [selectedMatch]);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin'); // Redireciona diretamente para /admin ao clicar em "Sair"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-4 flex items-center justify-center relative overflow-hidden">
      <img
        src="/logo-smash-V1-500x250-black.svg"
        alt="Smash Logo"
        className="absolute top-6 left-1/2 transform -translate-x-1/2 w-48 md:w-72 opacity-80 z-10"
      />

      {/* Espaços de Publicidade nas Bordas Externas */}
      <div className="absolute top-24 left-4 w-64 h-32 bg-yellow-200 rounded-lg text-center border-2 border-yellow-400 hover:bg-yellow-300 transition duration-200 z-15">
        <p className="text-xl md:text-2xl font-semibold">Anúncio 1</p>
        <p className="text-base md:text-lg">Espaço para marcas</p>
      </div>
      <div className="absolute top-24 right-4 w-64 h-32 bg-blue-200 rounded-lg text-center border-2 border-blue-400 hover:bg-blue-300 transition duration-200 z-15">
        <p className="text-xl md:text-2xl font-semibold">Anúncio 2</p>
        <p className="text-base md:text-lg">Espaço para marcas</p>
      </div>
      <div className="absolute bottom-24 left-4 w-64 h-32 bg-red-200 rounded-lg text-center border-2 border-red-400 hover:bg-red-300 transition duration-200 z-15">
        <p className="text-xl md:text-2xl font-semibold">Anúncio 3</p>
        <p className="text-base md:text-lg">Espaço para marcas</p>
      </div>
      <div className="absolute bottom-24 right-4 w-64 h-32 bg-purple-200 rounded-lg text-center border-2 border-purple-400 hover:bg-purple-300 transition duration-200 z-15">
        <p className="text-xl md:text-2xl font-semibold">Anúncio 4</p>
        <p className="text-base md:text-lg">Espaço para marcas</p>
      </div>

      <div className="relative z-20 w-full max-w-4xl bg-white rounded-xl shadow-2xl p-4 md:p-8">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Live - Placares ao Vivo</h2>
          <button
            onClick={handleLogout}
            className="bg-black text-green-500 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-gray-800 transition duration-200 flex items-center text-sm md:text-base"
          >
            <FaSignOutAlt className="mr-1 md:mr-2" /> Sair
          </button>
        </div>

        {/* Dropdown de Seleção */}
        <div className="mb-4">
          <label htmlFor="match-select" className="block text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Selecione o Jogo:
          </label>
          <select
            id="match-select"
            value={selectedMatch || ''}
            onChange={(e) => setSelectedMatch(e.target.value)}
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 text-sm md:text-base"
          >
            <option value="">Selecione um jogo</option>
            {matches.map((match) => (
              <option key={match.id} value={match.id}>
                {`${match.tournament} - ${match.player1} X ${match.player2} - ${match.time} - ${match.court}`}
              </option>
            ))}
          </select>
        </div>

        {/* Placar ao Vivo */}
        {selectedMatch && (
          <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-inner animate-fade-in">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {matches.find((m) => m.id === selectedMatch).tournament}
            </h3>
            <p className="text-lg md:text-xl">
              {matches.find((m) => m.id === selectedMatch).player1}: {scores[selectedMatch].player1} -{' '}
              {matches.find((m) => m.id === selectedMatch).player2}: {scores[selectedMatch].player2}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Live;
