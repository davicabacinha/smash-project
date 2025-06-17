
import React, { useState } from 'react';
import NewPlayer from './NewPlayer.jsx';

const Players = () => {
  const [activeFilter, setActiveFilter] = useState('Ativos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const players = [
    { id: '2876414', name: 'Davi Cabacinha', email: 'davicabacinha@gmail.com', status: 'Ativo', roles: ['Colaborador'], image: 'https://res.cloudinary.com/lptennis/image/upload/c_fit,h_250,q_auto,w_250/v1628355101/lgqicigyonvxd3dhevck.png' },
    { id: '2876415', name: 'Maria Oliveira', email: 'maria@example.com', status: 'Inativo', roles: [], image: '' },
    { id: '2876416', name: 'Pedro Santos', email: 'pedro@example.com', status: 'Ativo', roles: ['Aluno'], image: '' },
  ];

  const filters = [
    { name: 'Todos', url: '/players?status=all' },
    { name: 'Ativos', url: '/players' },
    { name: 'Colaboradores', url: '/players?kind=employees&status=all' },
    { name: 'Professores', url: '/players?kind=teachers' },
    { name: 'Recentes', url: '/players?status=recents' },
    { name: 'Inativos', url: '/players?status=inactives' },
    { name: 'Excluídos', url: '/players?status=disabled' },
  ];

  const filteredPlayers = players.filter((player) =>
    activeFilter === 'Todos' || player.status === activeFilter || (activeFilter === 'Colaboradores' && player.roles.includes('Colaborador'))
  );

  const handleSaveNewPlayer = (newPlayer) => {
    console.log('Novo jogador salvo:', newPlayer); // Para teste; substitua por lógica de salvamento (ex.: API ou estado)
    // Exemplo: adicionar ao array de players
    // setPlayers([...players, { id: Date.now().toString(), ...newPlayer, image: '' }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-[#c1ff72] shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-users text-black"></i> {/* Ícone preto */}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Membros</h1>
              <p className="text-gray-500 text-sm">Exibindo {filteredPlayers.length} de {players.length}</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/logo-smash-V1-500x250.svg" alt="SmashGo Logo" className="h-12" />
          </div>
        </div>
        <div className="flex justify-end space-x-2"> {/* Botões justificados à direita */}
          <button className="btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center">
            <i className="fas fa-inbox mr-2"></i> 0 Solicitações
          </button>
          <button className="btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center">
            <i className="fas fa-filter mr-2"></i> Filtros
          </button>
          <button className="btn bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center">
            <i className="fas fa-file-excel-o mr-2"></i> Exportar
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-black text-[#c1ff72] px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center"
          >
            <i className="fas fa-plus mr-2"></i> Novo
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-4 py-2 text-sm font-semibold rounded-full ${
                activeFilter === filter.name
                  ? 'bg-[#c1ff72] text-black' // Texto preto quando ativo
                  : 'bg-gray-200 text-black hover:bg-gray-300' // Texto preto quando inativo
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Players List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="space-y-6">
          {filteredPlayers.map((player) => (
            <div key={player.id} className="flex items-center p-4 border-b hover:bg-gray-50 transition">
              <div className="w-12 h-12 mr-4 flex-shrink-0">
                {player.image ? (
                  <img src={player.image} alt={player.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-gray-500"></i>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <a href={`/players/${player.id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-500">
                  {player.name}
                </a>
                <p className="text-gray-500 text-sm">{player.email}</p>
              </div>
              <div className="flex space-x-2">
                {player.roles.map((role, index) => (
                  <span key={index} className="badge bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <i className="fas fa-black-tie mr-1"></i> {role}
                  </span>
                ))}
                <span className="badge bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center">
                  <i className={`fas fa-check-circle mr-1 ${player.status === 'Ativo' ? 'text-green-500' : 'text-gray-500'}`}></i> {player.status}
                </span>
              </div>
              <div className="flex space-x-3 ml-4">
                <a href={`/players/${player.id}/edit`} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-pencil-alt"></i>
                </a>
                <a href={`/players/${player.id}/infos`} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-info-circle"></i>
                </a>
                <div className="relative">
                  <button className="btn bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 flex items-center text-sm">
                    Nova venda <i className="fas fa-caret-down ml-1"></i>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
                    <a href={`/players/${player.id}/payments/new/recipe/classroom`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <i className="fas fa-graduation-cap mr-2"></i> Aulas
                    </a>
                    <a href={`/players/${player.id}/payments/new/recipe/location`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <i className="fas fa-ticket mr-2"></i> Locações
                    </a>
                    <a href={`/players/${player.id}/payments/new/recipe/club`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <i className="fas fa-id-card mr-2"></i> Clube
                    </a>
                    <div className="border-t my-1"></div>
                    <a href={`/players/${player.id}/payments/new/recipe/ranking`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <i className="fas fa-list-ol mr-2"></i> Ranking
                    </a>
                    <a href={`/players/${player.id}/payments/new/recipe/tournament`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <i className="fas fa-trophy mr-2"></i> Torneio
                    </a>
                    <a href={`/players/${player.id}/payments/new/recipe/others`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <i className="fas fa-plus-square mr-2"></i> Outros
                    </a>
                    <div className="border-t my-1"></div>
                    <a href={`/players/${player.id}/payments/new/recipe/store`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <i className="fas fa-shopping-bag mr-2"></i> Loja/Lanchonete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para Novo Membro */}
      {isModalOpen && <NewPlayer onClose={() => setIsModalOpen(false)} onSave={handleSaveNewPlayer} />}
    </div>
  );
};

export default Players;