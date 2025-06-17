import React, { useState } from 'react';

const Courts = () => {
  const [courts, setCourts] = useState([]);
  const [newCourt, setNewCourt] = useState({ name: '', sport: 'tennis', surface: 'rápida', covered: false, uncovered: false, pricePerHour: '' });
  const [editCourt, setEditCourt] = useState(null);
  const [editedCourt, setEditedCourt] = useState({});
  const [showForm, setShowForm] = useState(false);

  // Mapeamento de valores de sport para rótulos formatados
  const sportLabels = {
    tennis: 'Tennis',
    beachTennis: 'Beach Tennis',
    squash: 'Squash',
    padel: 'Padel',
    pickleball: 'Pickleball',
  };

  // Mapeamento de valores de surface para rótulos formatados
  const surfaceLabels = {
    rápida: 'Rápida',
    grama: 'Grama',
    saibro: 'Saibro',
    areia: 'Areia',
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'covered') {
        setNewCourt((prev) => ({
          ...prev,
          covered: checked,
          uncovered: !checked,
        }));
        if (editCourt) {
          setEditedCourt((prev) => ({
            ...prev,
            covered: checked,
            uncovered: !checked,
          }));
        }
      } else if (name === 'uncovered') {
        setNewCourt((prev) => ({
          ...prev,
          uncovered: checked,
          covered: !checked,
        }));
        if (editCourt) {
          setEditedCourt((prev) => ({
            ...prev,
            uncovered: checked,
            covered: !checked,
          }));
        }
      }
    } else {
      const updated = { ...newCourt, [name]: value };
      if (name === 'sport' && value === 'beachTennis') {
        updated.surface = 'areia';
      }
      setNewCourt(updated);
      if (editCourt) {
        const updatedEdited = { ...editedCourt, [name]: value };
        if (name === 'sport' && value === 'beachTennis') {
          updatedEdited.surface = 'areia';
        }
        setEditedCourt(updatedEdited);
      }
    }
  };

  const handleAddCourt = () => {
    if (newCourt.name) {
      setCourts((prev) => [...prev, { ...newCourt, id: Date.now() }]);
      setNewCourt({ name: '', sport: 'tennis', surface: 'rápida', covered: false, uncovered: false, pricePerHour: '' });
      setShowForm(false);
    } else {
      alert('Preencha o nome da quadra!');
    }
  };

  const handleEditCourt = (court) => {
    setEditCourt(court.id);
    setEditedCourt({ ...court });
  };

  const handleSaveEdit = (id) => {
    setCourts((prev) =>
      prev.map((court) => (court.id === id ? { ...editedCourt, id } : court))
    );
    setEditCourt(null);
  };

  const handleCancelEdit = () => {
    setEditCourt(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="container mx-auto p-4">
        <nav className="bg-[#c1ff72] text-black p-4 shadow-lg mb-4 flex items-center justify-between w-auto"> {/* Verde-limão, texto preto, largura baseada na logo */}
          <img src="/logo-smash-v1.svg" alt="SmashGo Logo" className="h-48" /> {/* Logo à esquerda com h-48 */}
          <h1 className="text-3xl md:text-4xl font-bold uppercase mx-auto">CADASTRO DE QUADRAS</h1> {/* Centralizado com mx-auto */}
          <button
            onClick={() => alert('Saindo...')}
            className="bg-black text-white font-bold px-4 py-2 rounded text-sm hover:bg-gray-800 transition" /* Preto, texto branco negrito */
          >
            Sair
          </button>
        </nav>
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
          <h2 className="text-xl md:text-4xl font-semibold text-black mb-4 text-center whitespace-nowrap">Cadastro de Quadras</h2> {/* Texto preto */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#c1ff72] text-black px-4 py-2 rounded-lg hover:bg-[#c1ff72]/80 transition" // Verde-limão, texto preto
            >
              Adicionar Quadra
            </button>
          </div>
          {showForm && (
            <div className="mb-4 p-4 bg-gray-100 rounded-lg">
              <input
                type="text"
                name="name"
                value={newCourt.name}
                onChange={handleInputChange}
                className="p-2 border rounded w-full mb-2"
                placeholder="Nome da Quadra"
              />
              <select
                name="sport"
                value={newCourt.sport}
                onChange={handleInputChange}
                className="p-2 border rounded w-full mb-2"
              >
                <option value="tennis">Tennis</option>
                <option value="beachTennis">Beach Tennis</option>
                <option value="squash">Squash</option>
                <option value="padel">Padel</option>
                <option value="pickleball">Pickleball</option>
              </select>
              {newCourt.sport !== 'beachTennis' && (
                <select
                  name="surface"
                  value={newCourt.surface}
                  onChange={handleInputChange}
                  className="p-2 border rounded w-full mb-2"
                  disabled={newCourt.sport === 'beachTennis'}
                >
                  <option value="rápida">Rápida</option>
                  <option value="grama">Grama</option>
                  <option value="saibro">Saibro</option>
                </select>
              )}
              {newCourt.sport === 'beachTennis' && (
                <p className="text-sm text-black mb-2">Tipo de Solo: Areia (fixo para Beach Tennis)</p> /* Texto preto */
              )}
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="covered"
                  checked={newCourt.covered}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#c1ff72] bg-gray-100 border-gray-300 rounded focus:ring-[#c1ff72] focus:ring-2" // Verde-limão no checkbox
                />
                <span className="ml-2 text-black">Coberta</span> {/* Texto preto */}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="uncovered"
                  checked={newCourt.uncovered}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#c1ff72] bg-gray-100 border-gray-300 rounded focus:ring-[#c1ff72] focus:ring-2" // Verde-limão no checkbox
                />
                <span className="ml-2 text-black">Descoberta</span> {/* Texto preto */}
              </label>
              <div className="mt-2">
                <label className="flex items-center">
                  <span className="mr-2 text-black">R$</span> {/* Texto preto */}
                  <input
                    type="number"
                    name="pricePerHour"
                    value={newCourt.pricePerHour}
                    onChange={handleInputChange}
                    className="p-2 border rounded w-full"
                    placeholder="Valor por hora"
                    min="0"
                  />
                </label>
              </div>
              <button
                onClick={handleAddCourt}
                className="bg-[#c1ff72] text-black px-4 py-2 rounded-lg hover:bg-[#c1ff72]/80 transition w-full mt-2" // Verde-limão, texto preto
              >
                Salvar
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="mt-2 bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition w-full" // Texto preto
              >
                Cancelar
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {courts.map((court) => (
              <div key={court.id} className="p-4 border rounded-lg">
                {editCourt === court.id ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={editedCourt.name}
                      onChange={handleInputChange}
                      className="p-2 border rounded w-full mb-2"
                      placeholder="Nome da Quadra"
                    />
                    <select
                      name="sport"
                      value={editedCourt.sport}
                      onChange={handleInputChange}
                      className="p-2 border rounded w-full mb-2"
                    >
                      <option value="tennis">Tennis</option>
                      <option value="beachTennis">Beach Tennis</option>
                      <option value="squash">Squash</option>
                      <option value="padel">Padel</option>
                      <option value="pickleball">Pickleball</option>
                    </select>
                    {editedCourt.sport !== 'beachTennis' && (
                      <select
                        name="surface"
                        value={editedCourt.surface}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full mb-2"
                        disabled={editedCourt.sport === 'beachTennis'}
                      >
                        <option value="rápida">Rápida</option>
                        <option value="grama">Grama</option>
                        <option value="saibro">Saibro</option>
                      </select>
                    )}
                    {editedCourt.sport === 'beachTennis' && (
                      <p className="text-sm text-black mb-2">Tipo de Solo: Areia (fixo para Beach Tennis)</p> /* Texto preto */
                    )}
                    <label className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name="covered"
                        checked={editedCourt.covered}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#c1ff72] bg-gray-100 border-gray-300 rounded focus:ring-[#c1ff72] focus:ring-2" // Verde-limão no checkbox
                      />
                      <span className="ml-2 text-black">Coberta</span> {/* Texto preto */}
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="uncovered"
                        checked={editedCourt.uncovered}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#c1ff72] bg-gray-100 border-gray-300 rounded focus:ring-[#c1ff72] focus:ring-2" // Verde-limão no checkbox
                      />
                      <span className="ml-2 text-black">Descoberta</span> {/* Texto preto */}
                    </label>
                    <div className="mt-2">
                      <label className="flex items-center">
                        <span className="mr-2 text-black">R$</span> {/* Texto preto */}
                        <input
                          type="number"
                          name="pricePerHour"
                          value={editedCourt.pricePerHour}
                          onChange={handleInputChange}
                          className="p-2 border rounded w-full"
                          placeholder="Valor por hora"
                          min="0"
                        />
                      </label>
                    </div>
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={() => handleSaveEdit(court.id)}
                        className="bg-[#c1ff72] text-black px-4 py-2 rounded-lg hover:bg-[#c1ff72]/80 transition mr-2" // Verde-limão, texto preto
                      >
                        Salvar
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition" // Texto preto
                      >
                        Cancelar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p><strong>Nome:</strong> {court.name}</p>
                    <p><strong>Modalidade:</strong> {sportLabels[court.sport]}</p>
                    <p><strong>Tipo de Solo:</strong> {surfaceLabels[court.surface]}</p>
                    <p><strong>Coberta:</strong> {court.covered ? 'Sim' : 'Não'}</p>
                    <p><strong>Descoberta:</strong> {court.uncovered ? 'Sim' : 'Não'}</p>
                    <p><strong>Valor por Hora:</strong> R${court.pricePerHour || '0,00'}</p>
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={() => handleEditCourt(court)}
                        className="bg-[#c1ff72] text-black px-4 py-2 rounded-lg hover:bg-[#c1ff72]/80 transition" // Verde-limão, texto preto
                      >
                        Editar
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courts;