import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('jwtToken');
  
  // Verify the token (you may have your own logic for verification)
  const isAuthenticated = token ? true : false;

  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/" />
  );
};

export default PrivateRoutes;

