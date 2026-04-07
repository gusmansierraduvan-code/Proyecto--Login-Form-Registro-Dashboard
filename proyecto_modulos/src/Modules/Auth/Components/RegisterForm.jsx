import React from 'react'; 
import useRegisterForm from '../Hooks/useRegisterForm'; 
import Logo from '../../../Shared/assets/Logo.webp'; 
import './Auth.css'; 
const RegisterForm = () => { 
 const { formData, fieldErrors, touched, submitError, handleChange, handleBlur, handleSubmit } = useRegisterForm(); 
 return ( 
 <div className="login-container"> 
 <form onSubmit={handleSubmit} noValidate> 
 <h2>Registro <img src={Logo} alt="" width="80" /></h2>  {submitError && <div className="error-message" style={{ color: 'red' }}>{submitError}</div>} 
  
 {['username', 'password', 'email', 'telefono', 
'fechaNacimiento'].map((field) => ( 
 <div key={field}> 
 <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label> 
 <input 
 type={field === 'password' ? 'password' : field ===  'fechaNacimiento' ? 'date' : 'text'} 
 id={field} 
value={formData[field]} 
onChange={handleChange} 
onBlur={handleBlur} 
 /> 
{touched[field] && fieldErrors[field] && <small style={{ 
color: 'red' }}>{fieldErrors[field]}</small>} 
 </div> 
 ))}
 <button type="submit">Registrar</button> 
 </form> 
 <p>Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>  </div> 
 ); 
}; 
export default RegisterForm;