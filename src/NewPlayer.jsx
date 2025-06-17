
import React, { useState, useEffect } from 'react';

const NewPlayer = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    status: 'Ativo',
    roles: [],
    category: 'Iniciante',
    photo: null,
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState({});
  const [loadingCep, setLoadingCep] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, checked, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        roles: checked
          ? [...prev.roles, value]
          : prev.roles.filter((role) => role !== value),
      }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const fetchAddressByCep = async (cep) => {
    if (!/^\d{8}$/.test(cep)) {
      setErrors((prev) => ({ ...prev, cep: 'CEP inválido (deve ter 8 dígitos)' }));
      return;
    }
    setLoadingCep(true);
    setErrors((prev) => ({ ...prev, cep: '' }));
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setFormData((prev) => ({
          ...prev,
          address: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        }));
      } else {
        setErrors((prev) => ({ ...prev, cep: 'CEP não encontrado' }));
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, cep: 'Erro ao buscar CEP' }));
    }
    setLoadingCep(false);
  };

  const handleCepBlur = () => {
    if (formData.cep) fetchAddressByCep(formData.cep.replace(/\D/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newPlayer = { ...formData, id: Date.now().toString() }; // Gera um ID temporário
      onSave(newPlayer); // Passa os dados para o componente pai
      onClose(); // Fecha o modal
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Adicionar Novo Membro</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Coluna 1: Informações Pessoais */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent`}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Foto de Perfil</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
              accept="image/*"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Categoria</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Papéis</label>
            <div className="mt-1 space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="roles"
                  value="Colaborador"
                  checked={formData.roles.includes('Colaborador')}
                  onChange={handleChange}
                  className="mr-2"
                />
                Colaborador
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="roles"
                  value="Aluno"
                  checked={formData.roles.includes('Aluno')}
                  onChange={handleChange}
                  className="mr-2"
                />
                Aluno
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="roles"
                  value="Treinador"
                  checked={formData.roles.includes('Treinador')}
                  onChange={handleChange}
                  className="mr-2"
                />
                Treinador
              </label>
            </div>
          </div>

          {/* Coluna 2: Endereço */}
          <div>
            <label className="block text-sm font-medium text-gray-700">CEP</label>
            <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              onBlur={handleCepBlur}
              className={`mt-1 p-2 w-full border rounded-lg ${errors.cep ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent`}
              placeholder="XXXX-XXX"
            />
            {loadingCep && <p className="text-gray-500 text-xs mt-1">Carregando...</p>}
            {errors.cep && <p className="text-red-500 text-xs mt-1">{errors.cep}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Logradouro</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Número</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Complemento</label>
            <input
              type="text"
              name="complement"
              value={formData.complement}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bairro</label>
            <input
              type="text"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cidade</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Estado</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
            />
          </div>
          <div className="col-span-2 flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#c1ff72] text-black px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPlayer;
