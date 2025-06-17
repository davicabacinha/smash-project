
import React, { useState } from 'react';
import Players from './Players.jsx';
import Tournaments from './Tournaments.jsx';
import Agenda from './Agenda.jsx'; // Novo componente Agenda
import NewPlayer from './NewPlayer.jsx';

const Admin = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPanel = () => {
    switch (activePanel) {
      case 'agenda':
        return (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[1000px] max-h-[80vh] overflow-y-auto">
              <Agenda />
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => {
                    setShowPanel(false);
                    setActivePanel(null);
                  }}
                  className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setShowPanel(false);
                    setActivePanel(null);
                  }}
                  className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        );
      case 'membros':
        return (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[1000px] max-h-[80vh] overflow-y-auto">
              <Players />
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => {
                    setShowPanel(false);
                    setActivePanel(null);
                  }}
                  className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setShowPanel(false);
                    setActivePanel(null);
                  }}
                  className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        );
      case 'torneios':
        return (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[1000px] max-h-[80vh] overflow-y-auto">
              <Tournaments />
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => {
                    setShowPanel(false);
                    setActivePanel(null);
                  }}
                  className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setShowPanel(false);
                    setActivePanel(null);
                  }}
                  className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSaveNewPlayer = (newPlayer) => {
    console.log('Novo jogador salvo:', newPlayer); // Para teste; substitua por lógica de salvamento
  };

  return (
    <div className="min-h-screen bg-[#c1ff72] p-4">
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <img src="/logo-smash-V1-500x250.svg" alt="Smash Logo" className="h-auto max-w-[250px]" />
          <span className="text-black font-bold block mt-2">João Silva</span>
          <span className="text-black text-justify">Complexo Tennis</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4 max-w-2xl">
          <a
            href="#agenda"
            onClick={() => {
              setShowPanel(true);
              setActivePanel('agenda');
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-calendar-alt mr-3"></i> Agenda
          </a>
          <a
            href="#membros"
            onClick={() => {
              setShowPanel(true);
              setActivePanel('membros');
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-users mr-3"></i> Membros
          </a>
          <a
            href="#torneios"
            onClick={() => {
              setShowPanel(true);
              setActivePanel('torneios');
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-trophy mr-3"></i> Torneios
          </a>
          <a
            href="#rankings"
            onClick={() => {
              // Sem funcionalidade por enquanto
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-trophy mr-3"></i> Rankings
          </a>
          <a
            href="#financeiro"
            onClick={() => {
              // Sem funcionalidade por enquanto
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-money-bill-wave mr-3"></i> Financeiro
          </a>
          <a
            href="#marketing"
            onClick={() => {
              // Sem funcionalidade por enquanto
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-bullhorn mr-3"></i> Marketing
          </a>
          <a
            href="#relatorios"
            onClick={() => {
              // Sem funcionalidade por enquanto
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-chart-bar mr-3"></i> Relatórios
          </a>
          <a
            href="#marketplace"
            onClick={() => {
              // Sem funcionalidade por enquanto
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-store mr-3"></i> Marketplace
          </a>
          <a
            href="#redes-sociais"
            onClick={() => {
              // Sem funcionalidade por enquanto
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-share-alt mr-3"></i> Redes Sociais
          </a>
          <a
            href="#live"
            onClick={() => {
              // Sem funcionalidade por enquanto
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-video mr-3"></i> Live
          </a>
          <a
            href="#configuracoes"
            onClick={() => {
              // Sem funcionalidade por enquanto
            }}
            className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center"
          >
            <i className="fas fa-cog mr-3"></i> Configurações
          </a>
        </div>
        {showPanel && renderPanel()}
      </div>

      {/* Modal para Novo Membro */}
      {isModalOpen && <NewPlayer onClose={() => setIsModalOpen(false)} onSave={handleSaveNewPlayer} />}
    </div>
  );
};

export default Admin;
