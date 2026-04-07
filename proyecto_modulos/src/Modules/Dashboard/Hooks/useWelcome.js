import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
const useWelcome = () => { 
 const navigate = useNavigate(); 
 const [user, setUser] = useState(null); 
 const [isModalOpen, setIsModalOpen] = useState(false); 
 const [formData, setFormData] = useState({ username: '', email: '', telefono:  '', password: '', fechaNacimiento: '' }); 
 useEffect(() => { 
 const currentUser = JSON.parse(localStorage.getItem('currentUser'));  if (!currentUser) navigate('/login'); 
 else { 
 setUser(currentUser); 
 setFormData(currentUser); 
 } 
 }, [navigate]); 
 const handleLogout = () => { 
 localStorage.removeItem('currentUser'); 
 navigate('/login'); 
 }; 
 const handleInputChange = (e) => { 
 const { name, value } = e.target; 
 setFormData({ ...formData, [name]: value }); 
 }; 
 const handleUpdate = (e) => { 
 e.preventDefault(); 
 const users = JSON.parse(localStorage.getItem('users')) || [];  const updatedUsers = users.map(u => u.email === user.email ? { ...u, ...formData } : u); 
  
 localStorage.setItem('users', JSON.stringify(updatedUsers));  localStorage.setItem('currentUser', JSON.stringify(formData));   
 setUser(formData); 
 setIsModalOpen(false); 
 alert('Información actualizada correctamente'); 
 }; 
 return { user, isModalOpen, formData, handleLogout, handleInputChange, handleUpdate, openModal: () => setIsModalOpen(true), closeModal: () => setIsModalOpen(false) };
}; 

export default useWelcome;