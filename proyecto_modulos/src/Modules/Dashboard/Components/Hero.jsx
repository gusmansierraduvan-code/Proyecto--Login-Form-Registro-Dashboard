import React from 'react';

const Hero = ({ user, onUpdate }) => {
  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: '#ffffff', 
      borderRadius: '20px', 
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      textAlign: 'center',
      maxWidth: '500px',
      margin: '0 auto',
      border: '1px solid #eee'
    }}>
      <div style={{ fontSize: '60px', marginBottom: '10px' }}>👤</div>
      <h1 style={{ color: '#1a1a2e', marginBottom: '5px', fontSize: '2rem' }}>{user.username}</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>{user.email}</p>
      
      <button onClick={onUpdate} style={{ 
        padding: '15px 35px', 
        backgroundColor: '#00d2ff', 
        backgroundImage: 'linear-gradient(to right, #00d2ff 0%, #3a7bd5 100%)',
        color: 'white', 
        border: 'none', 
        borderRadius: '30px', 
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 8px 15px rgba(0, 210, 255, 0.3)'
      }}>
        Actualizar Perfil
      </button>
    </div>
  );
};

export default Hero;