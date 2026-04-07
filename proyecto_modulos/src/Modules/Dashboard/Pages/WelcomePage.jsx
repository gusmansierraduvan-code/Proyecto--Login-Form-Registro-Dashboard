import React from 'react'; 
import useWelcome from '../Hooks/useWelcome'; 
import Navbar from '../Components/Navbar'; 
import Footer from '../Components/Footer'; 
import Hero from '../Components/Hero'; 
import UpdateForm from '../Components/UpdateForm'; 

const WelcomePage = () => {
  const { 
    user, isModalOpen, formData, handleLogout, 
    handleInputChange, handleUpdate, openModal, closeModal 
  } = useWelcome(); 

  if (!user) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando...</div>; 

  return ( 
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      
      <Navbar username={user.username} onLogout={handleLogout} /> 
      
      <main style={{ 
        flex: 1, 
        background: '#f0f2f5', 
        backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)', 
        backgroundSize: '30px 30px',
        padding: '60px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Hero user={user} onUpdate={openModal} /> 
      </main>

      <Footer /> 

      <UpdateForm 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        formData={formData} 
        onChange={handleInputChange} 
        onUpdate={handleUpdate} 
      />
    </div> 
  ); 
}; 

export default WelcomePage;