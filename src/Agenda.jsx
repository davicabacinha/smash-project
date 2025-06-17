
import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Agenda = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [reservationName, setReservationName] = useState('');
  const [selectedTime, setSelectedTime] = useState('06:00');
  const [selectedDay, setSelectedDay] = useState('Seg');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 1-12
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedCourt, setSelectedCourt] = useState('Quadra 1');
  const [value, setValue] = useState(''); // Novo estado para valor
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o modal
  const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para o calendário
  const [reservations, setReservations] = useState({
    'Quadra 1': {
      '06:00': { Seg: 'João', Ter: 'Livre', Qua: 'Livre', Qui: 'Manutenção', Sex: 'Livre', Sáb: 'Maria', Dom: 'Livre' },
      '07:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '08:00': { Seg: 'João', Ter: 'Livre', Qua: 'Livre', Qui: 'Manutenção', Sex: 'Livre', Sáb: 'Maria', Dom: 'Livre' },
      '09:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '10:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '11:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '12:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '13:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '14:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '15:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '16:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '17:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '18:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '19:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '20:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '21:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '22:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '23:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
    },
    'Quadra 2': {
      '06:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '07:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      '08:00': { Seg: 'Livre', Ter: 'Livre', Qua: 'Livre', Qui: 'Livre', Sex: 'Livre', Sáb: 'Livre', Dom: 'Livre' },
      // ... (adicione mais horários se necessário)
    },
  });

  const handleAddReservation = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const handleSaveReservation = () => {
    if (reservationName.trim() && selectedDate && value.trim()) {
      const dayOfWeek = selectedDate.toLocaleDateString('pt-BR', { weekday: 'short' }).substring(0, 3);
      setReservations((prev) => {
        const newReservations = { ...prev };
        if (!newReservations[selectedCourt]) newReservations[selectedCourt] = {};
        if (!newReservations[selectedCourt][selectedTime]) newReservations[selectedCourt][selectedTime] = {};
        newReservations[selectedCourt][selectedTime][dayOfWeek] = reservationName;
        return newReservations;
      });
      setIsModalOpen(false); // Fecha o modal após salvar
      setReservationName('');
      setSelectedTime('06:00');
      setSelectedDate(new Date());
      setValue('');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Fecha o modal sem salvar
    setReservationName('');
    setSelectedTime('06:00');
    setSelectedDate(new Date());
    setValue('');
  };

  const handleHome = () => {
    if (onClose) {
      onClose(); // Chama a função onClose do Admin.jsx para fechar o modal e voltar ao menu principal
    }
  };

  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const courtReservations = reservations[selectedCourt] || {};
    const totalSlots = Object.keys(courtReservations).length * 7; // 7 dias por horário
    let free = 0, occupied = 0, maintenance = 0;

    Object.values(courtReservations).forEach((daySlots) => {
      Object.values(daySlots).forEach((status) => {
        if (status === 'Livre') free++;
        else if (status === 'Manutenção') maintenance++;
        else occupied++;
      });
    });

    const percentages = {
      free: totalSlots > 0 ? (free / totalSlots) * 100 : 0,
      occupied: totalSlots > 0 ? (occupied / totalSlots) * 100 : 0,
      maintenance: totalSlots > 0 ? (maintenance / totalSlots) * 100 : 0,
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let startAngle = 0;
    const colors = ['#c1ff72', '#F44336', '#2196F3']; // Verde-limão para "Livre"
    const labels = ['Livre', 'Manutenção', 'Ocupado'];

    Object.entries(percentages).forEach(([key, percentage], index) => {
      const angle = ((percentage / 100) * Math.PI * 2);
      ctx.save();
      ctx.translate(100, 120);
      ctx.rotate(-Math.PI / 10);
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.beginPath();
      ctx.moveTo(0, -20);
      ctx.arc(0, -20, 80, startAngle, startAngle + angle, false);
      ctx.fillStyle = colors[index];
      ctx.fill();
      ctx.restore();

      const freeEl = document.getElementById('freePercent');
      const maintenanceEl = document.getElementById('maintenancePercent');
      const occupiedEl = document.getElementById('occupiedPercent');
      if (freeEl) freeEl.textContent = `${percentages.free.toFixed(1)}%`;
      if (maintenanceEl) maintenanceEl.textContent = `${percentages.maintenance.toFixed(1)}%`;
      if (occupiedEl) occupiedEl.textContent = `${percentages.occupied.toFixed(1)}%`;

      startAngle += angle;
    });
  }, [reservations, selectedCourt]);

  // Função para obter semanas do mês
  const getWeeksInMonth = (year, month) => {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const weeks = [];
    let currentWeek = [];
    let currentDate = new Date(firstDay);

    while (currentDate <= lastDay) {
      currentWeek.push(new Date(currentDate));
      if (currentDate.getDay() === 0 || currentDate.getTime() === lastDay.getTime()) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return weeks.map((week, index) => ({ number: index + 1, days: week }));
  };

  const weeks = getWeeksInMonth(selectedYear, selectedMonth);
  const currentWeekDays = weeks.find((week) => week.number === selectedWeek)?.days || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-[#c1ff72] shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-calendar-alt text-black"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Agenda</h1>
              <p className="text-gray-500 text-sm">Exibindo 0 eventos</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/logo-smash-V1-500x250.svg" alt="Smash Logo" className="h-12" />
          </div>
        </div>
      </div>

      {/* Filtros de Semana e Quadra */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
          >
            {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 2 + i).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>{new Date(selectedYear, month - 1, 1).toLocaleString('pt-BR', { month: 'long' })}</option>
            ))}
          </select>
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(parseInt(e.target.value))}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
          >
            {weeks.map((week) => (
              <option key={week.number} value={week.number}>Semana {week.number}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleHome}
            className="bg-[#c1ff72] text-black p-3 rounded-lg hover:bg-[#c1ff72]/80 transition"
          >
            <i className="fas fa-home"></i>
          </button>
          <button
            onClick={handleAddReservation}
            className="bg-[#c1ff72] text-black px-6 py-3 rounded-lg hover:bg-[#c1ff72]/80 transition font-semibold"
          >
            Adicionar Nova Reserva
          </button>
          <select
            value={selectedCourt}
            onChange={(e) => setSelectedCourt(e.target.value)}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
          >
            <option value="Quadra 1">Quadra 1 - Tênis</option>
            <option value="Quadra 2">Quadra 2 - Tênis</option>
            {/* Adicione mais quadras conforme necessário */}
          </select>
        </div>
      </div>

      {/* Modal para Adicionar Reserva */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nova Reserva</h2>
            <hr className="border-t border-gray-300 mb-4" />
            <form className="grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); handleSaveReservation(); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome *</label>
                <input
                  type="text"
                  value={reservationName}
                  onChange={(e) => setReservationName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Horário *</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  required
                >
                  {Array.from({ length: 18 }, (_, i) => {
                    const hour = 6 + i;
                    const timeStr = `${hour.toString().padStart(2, '0')}:00`;
                    return <option key={timeStr} value={timeStr}>{timeStr}</option>;
                  })}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Dia *</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quadra *</label>
                <select
                  value={selectedCourt}
                  onChange={(e) => setSelectedCourt(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  required
                >
                  <option value="Quadra 1">Quadra 1 - Tênis</option>
                  <option value="Quadra 2">Quadra 2 - Tênis</option>
                  {/* Adicione mais quadras conforme necessário */}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Valor *</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1ff72] focus:border-transparent"
                  step="0.01"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-400 text-black px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#c1ff72] text-black px-4 py-2 rounded-lg hover:bg-[#c1ff72]/80 transition"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-3/4">
          <h2 className="text-xl md:text-4xl font-semibold text-black mb-4 text-center whitespace-nowrap">Agenda de Reservas</h2>
          <h3 className="text-lg md:text-5xl font-bold text-black mb-4 text-center whitespace-nowrap">{selectedCourt}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-8 gap-2 text-center border-b border-gray-200 pb-2 mb-2">
            <div className="p-2 font-semibold text-black">Horário</div>
            {currentWeekDays.map((day, index) => (
              <div key={index} className="p-2 font-semibold text-black hidden sm:block">
                <div>{day.toLocaleDateString('pt-BR', { weekday: 'short' })}</div>
                <div className="text-xs">{day.getDate()}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-8 gap-2 text-center">
            {Object.entries(reservations[selectedCourt] || {}).map(([time, days]) => (
              <React.Fragment key={time}>
                <div className="p-2 bg-gray-100 text-black">{time}</div>
                {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day) => {
                  const dateIndex = currentWeekDays.findIndex((d) => d.toLocaleDateString('pt-BR', { weekday: 'short' }) === day);
                  return (
                    <div
                      key={day}
                      className={`p-2 ${
                        days[day] === 'Manutenção' ? 'bg-red-100' : days[day] !== 'Livre' ? 'bg-[#c1ff72]' : 'bg-gray-100'
                      } truncate hidden sm:block ${dateIndex === -1 ? 'hidden' : ''}`}
                    >
                      {days[day]}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4 flex flex-col items-center">
          <h3 className="text-3xl font-bold text-black mb-4 text-center">Disponibilidade</h3>
          <canvas ref={canvasRef} width="200" height="200" className="mx-auto mb-4"></canvas>
          <table className="text-center mx-auto">
            <thead>
              <tr>
                <th className="p-2 text-black">Status</th>
                <th className="p-2 text-black">%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-black" id="freePercent"></td>
                <td className="p-2 text-black" id="freePercent"></td>
              </tr>
              <tr>
                <td className="p-2 text-black" id="maintenancePercent"></td>
                <td className="p-2 text-black" id="maintenancePercent"></td>
              </tr>
              <tr>
                <td className="p-2 text-black" id="occupiedPercent"></td>
                <td className="p-2 text-black" id="occupiedPercent"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
