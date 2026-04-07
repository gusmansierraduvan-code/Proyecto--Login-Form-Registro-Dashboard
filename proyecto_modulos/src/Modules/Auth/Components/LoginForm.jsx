import React from 'react'; 

import useLoginForm from '../Hooks/useLoginForm';
import './Auth.css'; 
import Logo from '../../../Shared/assets/Logo.webp'; 
const LoginForm = () => { 
 const { loginData, fieldErrors, touched, submitError, handleChange, handleBlur, handleSubmit } = useLoginForm(); 
 return ( 
 <div className="login-container"> 
 <h2>Login <img src={Logo} alt="" width="80" /></h2> 
 <form onSubmit={handleSubmit} noValidate> 
 {submitError && <div className="error-message" style={{ color: 'red' }}>{submitError}</div>} 
 <div> 
 <label htmlFor="email">Email:</label> 
 <input type="email" id="email" required value={loginData.email} onChange={handleChange} onBlur={handleBlur} /> 
 {touched.email && fieldErrors.email && <small style={{ color: 'red' }}>{fieldErrors.email}</small>} 
 </div>
 <div> 
 <label htmlFor="password">Contraseña:</label>  <input type="password" id="password" required value= {loginData.password} onChange={handleChange} onBlur={handleBlur} />  {touched.password && fieldErrors.password && <small style={{ color: 'red' }}>{fieldErrors.password}</small>} 
 </div> 
 <button type="submit">Ingresar</button> 
 <p>No tienes cuenta? <a href="/register">Registrarse</a></p>  </form> 
 </div> 
 ); 
}; 
export default LoginForm; 
