import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#0f0c29',
      color: 'white',
      padding: '30px 20px',
      textAlign: 'center',
      borderTop: '2px solid #00d2ff',
      marginTop: 'auto'
    }}>
      <p style={{ margin: 0, fontWeight: 'bold' }}>&copy; 2026 Dashboard Administrativo</p>
      <p style={{ fontSize: '0.8rem', color: '#00d2ff', marginTop: '5px' }}>
        Desarrollado por Duvan Guzman - SENA
      </p>
    </footer>
  );
};

export default Footer;