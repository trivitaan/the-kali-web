import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure the path to Navbar is correct

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/home';

  return (
    <div>
      {showNavbar && <Navbar />}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
