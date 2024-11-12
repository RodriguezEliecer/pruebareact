import React from 'react';
import Sidebar from './components/Sidebar';
import Information from './components/Information';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Dashboard</h1>
        <Information />
      </div>
    </div>
  );
}

export default App;
