import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNav } from '../context/NavContext';
import '../assets/styles/Navbar.css'; // Assuming you have the CSS in this file

const Navbar = () => {
  const { isOpen, toggleIsOpen } = useNav(); // Use the hook to access context

  return (
    <nav className={`navbar ${isOpen ? "responsive" : ""}`} aria-label="Main navigation">
      <NavLink to="/home" className="home-link" activeClassName="active">Home</NavLink>
      <NavLink to="/game" className="game-link" activeClassName="active">Game</NavLink>
      <NavLink to="/merch" className="merch-link" activeClassName="active">Merch</NavLink>
      <NavLink to="/about" className="about-link" activeClassName="active">About</NavLink>
      <NavLink to="/info" className="info-link" activeClassName="active">Info</NavLink>
      <button className="icon" onClick={toggleIsOpen} aria-label="Toggle navigation">
        <i className="fa fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
