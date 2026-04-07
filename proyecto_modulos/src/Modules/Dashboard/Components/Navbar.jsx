import React from 'react';

const Navbar = ({ username, onLogout }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 40px',
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      borderBottom: '3px solid #00d2ff'
    }}>
      <div style={{ fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '1px' }}>
        SENA <span style={{ color: '#00d2ff' }}>DASHBOARD</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ opacity: 0.9 }}>Usuario: <strong>{username}</strong></span>
        <button onClick={onLogout} style={{
          padding: '8px 18px',
          backgroundColor: 'transparent',
          border: '2px solid #ff4b2b',
          color: '#ff4b2b',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: '600',
          transition: '0.3s'
        }}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;