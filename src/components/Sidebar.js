import React, { useState } from 'react';

function Sidebar() {
  const [selected, setSelected] = useState('Dashboard');

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div
      style={{
        width: '200px',
        height: '100vh',
        background: '#282c34',
        color: 'white',
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <button
        onClick={() => handleSelect('Dashboard')}
        style={{
          backgroundColor: selected === 'Dashboard' ? '#3f51b5' : 'transparent',
          color: 'white',
          padding: '10px',
          border: 'none',
          textAlign: 'left',
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => handleSelect('Informacion')}
        style={{
          backgroundColor: selected === 'Informacion' ? '#3f51b5' : 'transparent',
          color: 'white',
          padding: '10px',
          border: 'none',
          textAlign: 'left',
        }}
      >
        Información
      </button>
      <button
        onClick={() => handleSelect('Reportes')}
        style={{
          backgroundColor: selected === 'Reportes' ? '#3f51b5' : 'transparent',
          color: 'white',
          padding: '10px',
          border: 'none',
          textAlign: 'left',
        }}
      >
        Reportes
      </button>
      <button
        onClick={() => handleSelect('Configuracion')}
        style={{
          backgroundColor: selected === 'Configuracion' ? '#3f51b5' : 'transparent',
          color: 'white',
          padding: '10px',
          border: 'none',
          textAlign: 'left',
        }}
      >
        Configuración
      </button>
    </div>
  );
}

export default Sidebar;
