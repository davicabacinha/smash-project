import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">SmashGo - Painel do Gestor</h1>
          <div>
            <a href="#" className="text-blue-200 hover:text-white transition">Sair</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">Visão Geral</h2>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-medium text-gray-600">Reservas Hoje</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-medium text-gray-600">Receita do Mês</h3>
            <p className="text-4xl font-bold text-green-600 mt-2">R$ 8.500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-medium text-gray-600">Ocupação de Quadras</h3>
            <p className="text-4xl font-bold text-yellow-600 mt-2">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;