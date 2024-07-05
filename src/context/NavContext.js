import React, { createContext, useState, useContext } from 'react';

const NavContext = createContext();

export const useNav = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false); // Initial state of the navbar

    const toggleIsOpen = () => {
        setIsOpen(!isOpen); // Function to toggle the open/close state
    };

    return (
        <NavContext.Provider value={{ isOpen, toggleIsOpen }}>
            {children}
        </NavContext.Provider>
    );
};
