import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Nombre', width: 150, editable: true },
  { field: 'age', headerName: 'Edad', type: 'number', width: 110, editable: true },
];

function Information() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newRecord, setNewRecord] = useState({ name: '', age: '' });

  // Obtener los registros al cargar la página
  useEffect(() => {
    axios.get('http://localhost:5000/api/records')
      .then((response) => {
        setRows(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Maneja la actualización de los registros
  const handleProcessRowUpdate = async (newRow) => {
    try {
      await axios.put(`http://localhost:5000/api/records/${newRow.id}`, newRow);
      return newRow;
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Maneja la eliminación de registros
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/records/${id}`);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  // Maneja el cambio de valores en el formulario para agregar un nuevo registro
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({
      ...newRecord,
      [name]: value,
    });
  };

  // Agregar un nuevo registro al backend
  const handleAddRecord = async () => {
    if (newRecord.name && newRecord.age) {
      try {
        const response = await axios.post('http://localhost:5000/api/records', newRecord);
        // Actualiza la tabla con el nuevo registro
        setRows([...rows, response.data]);
        setNewRecord({ name: '', age: '' }); // Limpiar el formulario
      } catch (error) {
        console.error('Error adding new record:', error);
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Información</h2>

      {/* Formulario para agregar nuevo registro */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newRecord.name}
          onChange={handleInputChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          name="age"
          placeholder="Edad"
          value={newRecord.age}
          onChange={handleInputChange}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddRecord}>Agregar</button>
      </div>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        loading={loading}
        onProcessRowUpdate={handleProcessRowUpdate}
      />
    </div>
  );
}

export default Information;
