
import React, { useState } from 'react';

const Tournaments = () => {
  const [activeFilter, setActiveFilter] = useState('Em Andamento');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewByCategory, setViewByCategory] = useState(false);

  const filters = viewByCategory
    ? [
        { name: 'Em Andamento', url: '/tournaments' },
        { name: 'Em Criação', url: '/tournaments?filter=created' },
        { name: 'Inscrições Abertas', url: '/tournaments?filter=awaiting-subscribes' },
        { name: 'Chaves Geradas/Publicadas', url: '/tournaments?filter=ongoing' },
        { name: 'Concluídas', url: '/tournaments?filter=concluded' },
      ]
    : [
        { name: 'Em Andamento', url: '/tournaments' },
        { name: 'Concluídas', url: '/tournaments?filter=concluded' },
      ];

  const tournaments = []; // Placeholder para lista de torneios

  const handleSaveTournament = (formData) => {
    console.log('Novo torneio salvo:', formData);
    setIsModalOpen(false); // Fecha o modal após salvar
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Fecha o modal ao cancelar
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-[#c1ff72] shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-trophy text-black"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Torneios</h1>
              <p className="text-gray-500 text-sm">Exibindo {tournaments.length} de {tournaments.length}</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/logo-smash-V1-500x250.svg" alt="Smash Logo" className="h-12" />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            className="btn bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 flex items-center"
            onClick={() => setViewByCategory(!viewByCategory)}
          >
            <i className="fas fa-list-ul mr-2"></i>{viewByCategory ? 'Ver por Torneio' : 'Ver por Categoria'}
          </button>
          <button
            className="btn bg-black text-[#c1ff72] px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center"
            onClick={() => setIsModalOpen(true)}
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
                  ? 'bg-[#c1ff72] text-black'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tournaments/Categories Content */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="space-y-6">
          {viewByCategory ? (
            <>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center">
                  <i className="fas fa-list-ul text-white"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Categorias</h2>
                  <p className="text-gray-500 text-sm">Total de 0</p>
                </div>
              </div>
              <p className="text-red-500 text-lg">Não foi encontrado nenhuma categoria nos filtros selecionados.</p>
            </>
          ) : (
            <p className="text-red-500 text-lg">Não foi encontrado nenhum torneio nos filtros selecionados.</p>
          )}
          {/* Lista de torneios/categorias será adicionada aqui */}
        </div>
      </div>

      {/* Modal Novo Torneio */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Novo Torneio</h2>
            <hr className="border-t border-gray-300 mb-6" />
            <form className="grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); handleSaveTournament({}); }}>
              {/* Seção 1 - Informações Básicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Esporte *</label>
                  <select
                    name="sport"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="tennis">Tênis</option>
                    <option value="beach_tennis">Beach Tennis</option>
                    <option value="futevolley">Futevôlei</option>
                    <option value="volley">Vôlei de praia</option>
                    <option value="padel">Padel</option>
                    <option value="squash">Squash</option>
                    <option value="society">Futebol society</option>
                    <option value="pickleball">Pickleball</option>
                    <option value="table_tennis">Tênis de mesa</option>
                    <option value="mini_tennis">Raquetinha</option>
                    <option value="badminton">Badminton</option>
                    <option value="court_volley">Vôlei de quadra</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="visible"
                  defaultChecked
                  className="mr-2"
                />
                <label className="text-sm font-medium text-gray-700">Visível</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Avatar</label>
                  <input
                    type="file"
                    name="file"
                    accept="image/png, image/jpg, image/jpeg"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cartaz</label>
                  <input
                    type="file"
                    name="poster"
                    accept="image/png, image/jpg, image/jpeg"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Informações e observações aos jogadores</label>
                <textarea
                  name="description"
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Início das inscrições *</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="enrollment_start_date"
                      placeholder="dd/mm/aaaa"
                      className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                      required
                    />
                    <span className="input-group-addon input-group-text">
                      <i className="fas fa-calendar fa-lg"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fim das inscrições *</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="enrollment_end_date"
                      placeholder="dd/mm/aaaa"
                      className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                      required
                    />
                    <span className="input-group-addon input-group-text">
                      <i className="fas fa-calendar fa-lg"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Início dos jogos *</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="start_date"
                      placeholder="dd/mm/aaaa"
                      className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                      required
                    />
                    <span className="input-group-addon input-group-text">
                      <i className="fas fa-calendar fa-lg"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fim dos jogos *</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="end_date"
                      placeholder="dd/mm/aaaa"
                      className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                      required
                    />
                    <span className="input-group-addon input-group-text">
                      <i className="fas fa-calendar fa-lg"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="automate_enrollment"
                  className="mr-2"
                />
                <label className="text-sm font-medium text-gray-700">Automatizar abertura e encerramento das inscrições</label>
              </div>

              {/* Seção 2 - Inscrições */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">1 - Inscrições</h3>
                <hr className="border-t border-gray-300 mb-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Quem pode se inscrever *</label>
                  <select
                    name="subscribes_kind"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  >
                    <option value="1">Apenas administradores podem inscrever os jogadores no torneio</option>
                    <option value="2">Apenas jogadores que pertencem ao ranking</option>
                    <option value="3">Apenas membros associados a este perfil</option>
                    <option value="4">Qualquer jogador da LetzPlay</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Máximo de categorias que um jogador pode se inscrever *</label>
                  <select
                    name="max_user_subscribes"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Valor da inscrição *</label>
                  <select
                    name="fee_kind"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  >
                    <option value="1">Fixo com cobrança única para a dupla/equipe</option>
                    <option value="2">Fixo com cobrança separada para cada jogador da dupla</option>
                    <option value="3">Variável de acordo com o número da inscrição</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Forma de cobrança *</label>
                  <select
                    name="charging_kind"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="1">Não farei o recebimento via LetzPlay</option>
                    <option value="2">Boleto</option>
                    <option value="4">PIX</option>
                    <option value="5">Boleto e PIX</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">1ª inscrição *</label>
                  <input
                    type="number"
                    name="first_fee"
                    step="any"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">2ª inscrição *</label>
                  <input
                    type="number"
                    name="second_fee"
                    step="any"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">3ª inscrição *</label>
                  <input
                    type="number"
                    name="third_fee"
                    step="any"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">4ª inscrição *</label>
                  <input
                    type="number"
                    name="fourth_fee"
                    step="any"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Seção 3 - Local do Torneio */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">2 - Local do Torneio</h3>
                <p className="text-sm text-gray-500">Ao definir o local do torneio os jogadores poderão ver o endereço no mapa</p>
                <hr className="border-t border-gray-300 mb-4" />
              </div>
              <div className="flex items-center space-x-2">
                <select
                  name="subsidiary_id"
                  className="p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  <option value="13895">Condomínio Hibisco</option>
                </select>
                <button className="text-red-500 hover:text-red-700">
                  <i className="fas fa-trash-o"></i>
                </button>
              </div>
              <a className="text-[#c1ff72] text-semibold hover:underline">+ Local</a>

              {/* Seção 4 - Equipe */}
              <div>
                <h3 className="text-lg font-bold text-gray-700">3 - Equipe</h3>
                <p className="text-sm text-gray-500">A equipe de gestão do torneio é exposta no perfil e nas inscrições</p>
                <hr className="border-t border-gray-300 mb-4" />
              </div>
              <div className="flex items-center space-x-2">
                <select
                  name="member_id"
                  className="p-2 w-1/2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  <option value="2876414">Davi Cabacinha</option>
                </select>
                <select
                  name="role"
                  className="p-2 w-1/3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  <option value="10">Diretor geral</option>
                  <option value="11">Diretor do torneio</option>
                  <option value="12">Departamento Técnico</option>
                  <option value="20">Árbitro geral</option>
                  <option value="21">Árbitro auxiliar</option>
                  <option value="30">Auxiliar</option>
                </select>
                <button className="text-red-500 hover:text-red-700">
                  <i className="fas fa-trash-o"></i>
                </button>
              </div>
              <a className="text-[#c1ff72] text-semibold hover:underline">+ Pessoa</a>

              {/* Seção 5 - Contato */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="contact"
                  className="mr-2"
                />
                <label className="text-sm font-medium text-gray-700">Exibir e-mail e telefone para contato?</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    name="contact_email"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefone</label>
                  <input
                    type="tel"
                    name="contact_phone"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Seção 6 - Automações */}
              <div>
                <h3 className="text-lg font-bold text-gray-700">4 - Automações</h3>
                <hr className="border-t border-gray-300 mb-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="waiting_list"
                    defaultChecked
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Permite fila de espera?</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="automate_waiting_list"
                    defaultChecked
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Automatizar inclusão dos jogadores da fila de espera</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="restrictions"
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Permitir ao jogador informar suas restrições de horário?</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="enable_instagram"
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Exibe campo para os jogadores informarem o perfil do instagram?</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="shirt_size"
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Irei disponibilizar camisetas</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="show_opponent_contacts"
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Jogadores podem visualizar o contato dos adversários?</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="change_partner"
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Jogador pode realizar a troca de parceiro?</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="hide_subscribes"
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Não exibir os inscritos do torneio para os jogadores</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cpf_required"
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Jogador deve informar o CPF ao se inscrever</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="city_required"
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Jogador deve informar sua cidade ao se inscrever</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="auto_destroy_subscribes"
                    disabled
                    className="mr-2"
                  />
                  <label className="text-sm font-medium text-gray-700">Excluir automaticamente as inscrições não pagas em 24h</label>
                </div>
              </div>

              {/* Seção 7 - Personalizações */}
              <div>
                <h3 className="text-lg font-bold text-gray-700">5 - Personalizações</h3>
                <hr className="border-t border-gray-300 mb-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Quem pode inserir o placar? *</label>
                  <select
                    name="marker_of_result"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                    required
                  >
                    <option value="1">Apenas os administradores</option>
                    <option value="2">Jogadores e administradores</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Agendamento dos jogos</label>
                  <select
                    name="scheduling_kind"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  >
                    <option value="1">Administrador definirá o horário do jogo</option>
                    <option value="2">Jogador pode agendar somente os horários disponibilizados pelo administrador</option>
                    <option value="3">Jogador pode agendar qualquer horário</option>
                  </select>
                </div>
              </div>

              {/* Seção 8 - Premiação e Regulamento */}
              <div>
                <h3 className="text-lg font-bold text-gray-700">6 - Premiação e Regulamento</h3>
                <hr className="border-t border-gray-300 mb-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Descrição da Premiação</label>
                  <textarea
                    name="awards"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Valor total da Premiação</label>
                  <input
                    type="number"
                    name="prize_money"
                    step="1"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Regulamento do Torneio</label>
                <textarea
                  name="regulation"
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                ></textarea>
              </div>

              {/* Seção 9 - Campos Personalizados */}
              <div>
                <h3 className="text-lg font-bold text-gray-700">7 - Campos Personalizados</h3>
                <hr className="border-t border-gray-300 mb-4" />
              </div>
              <a className="text-[#c1ff72] text-semibold hover:underline">+ Campo Personalizado</a>

              {/* Footer */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#c1ff72] text-black px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white"
                  data-disable-with="Aguarde..."
                >
                  Criar Torneio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tournaments;