import React from 'react';
import Navbar from './Navbar'; // Ensure the path to Navbar is correct

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
