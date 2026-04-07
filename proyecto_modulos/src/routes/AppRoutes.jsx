import React from 'react'; 
import { Route, Routes } from 'react-router-dom'; 
import LoginForm from '../Modules/Auth/Components/LoginForm';
import RegisterForm from '../Modules/Auth/Components/RegisterForm';
import WelcomePage from '../Modules/Dashboard/Pages/WelcomePage';
import { BrowserRouter } from 'react-router-dom';
const AppRoutes = () => { 
      return ( 
      <BrowserRouter>
      <Routes> 
      <Route path="/" element={<LoginForm />} />  <Route path="/login" element={<LoginForm />} />  
      <Route path="/register" element={<RegisterForm />} />  
<Route path="/welcome" element={<WelcomePage />} />
   </Routes> 
</BrowserRouter>
   ); 
}; 
export default AppRoutes; 
