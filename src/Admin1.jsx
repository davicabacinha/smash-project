
import React, { useState } from 'react';

const Admin1 = () => {
  const [activeSection, setActiveSection] = useState(null); // Não será mais usado diretamente
  const [showPanel, setShowPanel] = useState(false); // Inicia sem painel aberto em mobile
  const [activePanel, setActivePanel] = useState(null); // Inicia sem painel ativo em mobile

  const renderPanel = () => {
    switch (activePanel) {
      case 'dashboard':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Dashboard</h2>
            <p className="text-black">Aqui você pode gerenciar o dashboard. Veja informações gerais de gestão.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'membros':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Membros</h2>
            <p className="text-black">Aqui você pode gerenciar os membros. Adicione, edite ou remova informações.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'rankings':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Rankings</h2>
            <p className="text-black">Aqui você pode gerenciar os rankings. Atualize ou visualize pontuações.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'torneios':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Torneios</h2>
            <p className="text-black">Aqui você pode gerenciar os torneios. Crie ou edite eventos.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'agenda':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Agenda</h2>
            <p className="text-black">Aqui você pode gerenciar a agenda. Adicione ou edite reservas.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'financeiro':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Financeiro</h2>
            <p className="text-black">Aqui você pode gerenciar as finanças. Veja relatórios ou pagamentos.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'marketing':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Marketing</h2>
            <p className="text-black">Aqui você pode gerenciar campanhas de marketing. Crie promoções.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'relatorios':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Relatórios</h2>
            <p className="text-black">Aqui você pode gerar e visualizar relatórios. Analise dados.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'marketplace':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Marketplace</h2>
            <p className="text-black">Aqui você pode gerenciar o marketplace. Adicione produtos.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'redes-sociais':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Redes Sociais</h2>
            <p className="text-black">Aqui você pode gerenciar redes sociais. Publique atualizações.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'live':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Live</h2>
            <p className="text-black">Aqui você pode gerenciar transmissões ao vivo. Inicie ou monitore.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      case 'configuracoes':
        return (
          <div className="absolute top-60 right-0 w-3/4 h-full bg-white p-6 rounded-lg shadow-lg ml-4">
            <h2 className="text-2xl font-bold text-black mb-4">Configurações</h2>
            <p className="text-black">Aqui você pode gerenciar configurações. Altere preferências.</p>
            <button
              onClick={() => {
                setShowPanel(false);
                setActivePanel(null);
              }}
              className="mt-4 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Fechar
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#c1ff72] p-4">
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <img src="/logo-smash-V1-500x250.svg" alt="SmashGo Logo" className="h-auto max-w-[250px]" />
          <span className="text-black font-bold block mt-2">João Silva</span>
          <span className="text-black text-justify">Complexo Tennis</span>
          <button className="mt-2 bg-black text-[#c1ff72] px-4 py-2 rounded-lg hover:bg-gray-800 transition">Sair</button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 pr-4">
          <div className="space-y-4">
            <a
              href="#dashboard"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('dashboard');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
            </a>
            <a
              href="#membros"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('membros');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-users mr-3"></i> Membros
            </a>
            <a
              href="#rankings"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('rankings');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-trophy mr-3"></i> Rankings
            </a>
            <a
              href="#torneios"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('torneios');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-volleyball-ball mr-3"></i> Torneios
            </a>
            <a
              href="#agenda"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('agenda');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-calendar-alt mr-3"></i> Agenda
            </a>
            <a
              href="#financeiro"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('financeiro');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-money-bill-wave mr-3"></i> Financeiro
            </a>
            <a
              href="#marketing"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('marketing');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-bullhorn mr-3"></i> Marketing
            </a>
            <a
              href="#relatorios"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('relatorios');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-chart-bar mr-3"></i> Relatórios
            </a>
            <a
              href="#marketplace"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('marketplace');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-store mr-3"></i> Marketplace
            </a>
            <a
              href="#redes-sociais"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('redes-sociais');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-share-alt mr-3"></i> Redes Sociais
            </a>
            <a
              href="#live"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('live');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-video mr-3"></i> Live
            </a>
            <a
              href="#configuracoes"
              onClick={() => {
                setShowPanel(true);
                setActivePanel('configuracoes');
              }}
              className="bg-white text-black text-xl font-bold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-center w-full"
            >
              <i className="fas fa-cog mr-3"></i> Configurações
            </a>
          </div>
          {showPanel && renderPanel()}
        </div>
        <div className="w-3/4 pl-4">
          {/* Área do painel de controle será preenchida dinamicamente por renderPanel quando showPanel for true */}
        </div>
      </div>
    </div>
  );
};

export default Admin1;
