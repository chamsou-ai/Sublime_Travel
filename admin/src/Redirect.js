import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const Redirect = () => {
  const token = localStorage.getItem('jwtToken');
  
  // Verify the token (you may have your own logic for verification)
  const isAuthenticated = token ? true : false;
  return (
    isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet/>
  )
}

export default Redirect