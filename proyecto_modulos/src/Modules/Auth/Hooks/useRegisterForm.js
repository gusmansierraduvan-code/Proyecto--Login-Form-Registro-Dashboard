import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
const initialData = { username: '', password: '', email: '', telefono: '',  fechaNacimiento: '' }; 
const initialErrors = { username: '', password: '', email: '', telefono: '',  fechaNacimiento: '' }; 
const initialTouched = { username: false, password: false, email: false, telefono:  false, fechaNacimiento: false }; 
const useRegisterForm = () => {
 const navigate = useNavigate(); 
 const [formData, setFormData] = useState(initialData); 
 const [fieldErrors, setFieldErrors] = useState(initialErrors);  const [touched, setTouched] = useState(initialTouched); 
 const [submitError, setSubmitError] = useState(''); 
 const validateField = (field, value) => { 
 const trimmedValue = value.trim(); 
 if (!trimmedValue) return 'Este campo es obligatorio'; 
 if (field === 'username' && trimmedValue.length < 3) return 'El nombre debe tener mínimo 3 caracteres'; 
 if (field === 'email') { 
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) return 'Email inválido'; 
 const users = JSON.parse(localStorage.getItem('users')) || [];  if (users.some(u => u.email.toLowerCase() === 
trimmedValue.toLowerCase())) return 'El email ya está registrado';  } 
 if (field === 'telefono' && !/^\d{7,15}$/.test(trimmedValue)) return 'Teléfono inválido (7-15 dígitos)'; 
 if (field === 'fechaNacimiento') { 
 if (new Date(trimmedValue) > new Date()) return 'Fecha inválida';  } 
 return ''; 
 }; 
 const validateForm = (data) => { 
 const errors = {}; 
 Object.keys(data).forEach(field => errors[field] = validateField(field, data[field])); 
 return errors; 
 }; 
 const hasErrors = (errors) => Object.values(errors).some(error => error); 
 const handleChange = (e) => { 
 const { id, value } = e.target; 
 setFormData({ ...formData, [id]: value }); 
 if (touched[id]) setFieldErrors(prev => ({ ...prev, [id]: validateField(id, value) })); 
 }; 
 const handleBlur = (e) => { 
 const { id, value } = e.target; 
 setTouched(prev => ({ ...prev, [id]: true })); 
 setFieldErrors(prev => ({ ...prev, [id]: validateField(id, value) }));  }; 
 const handleSubmit = (e) => { 
 e.preventDefault(); 
 const touchedAll = { username: true, password: true, email: true, telefono: true, fechaNacimiento: true }; 
 const validation = validateForm(formData); 
 setTouched(touchedAll);
 setFieldErrors(validation); 
  
 if (hasErrors(validation)) { 
 setSubmitError('Corrija los errores'); 
 return; 
 } 
 const newUser = { id: Date.now(), ...formData, email: 
formData.email.toLowerCase() }; 
 const users = JSON.parse(localStorage.getItem('users')) || [];  users.push(newUser); 
 localStorage.setItem('users', JSON.stringify(users)); 
  
 alert('Registro exitoso'); 
 navigate('/login'); 
 }; 
 return { formData, fieldErrors, touched, submitError, handleChange, handleBlur, handleSubmit }; 
}; 
export default useRegisterForm;