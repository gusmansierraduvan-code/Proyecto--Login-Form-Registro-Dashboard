import React from 'react';

const UpdateForm = ({ isOpen, onClose, formData, onChange, onUpdate }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
        <h3>Actualizar Datos</h3>
        <input name="username" value={formData.username} onChange={onChange} style={{ width: '100%', marginBottom: '10px' }} />
        <button onClick={onUpdate}>Guardar Cambios</button>
        <button onClick={onClose} style={{ marginLeft: '10px' }}>Cancelar</button>
      </div>
    </div>
  );
};

export default UpdateForm;