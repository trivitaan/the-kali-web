import React from 'react';
import { Link } from 'react-router-dom';
import keyIcon from '../assets/images/Game-Btn.png';
import banner from '../assets/images/banner.png';
import d1Button from '../assets/images/D1-Btn.png';
import ARButton from '../assets/images/AR-Btn.png';
import SM from '../assets/images/SM-Btn.png';
import infoButton from '../assets/images/Info-Btn.png';
import '../assets/styles/Homepage.css'

const Homepage = () => {
    return (
        <div className="container">
            <div className="keyhole-container">
                <img src={banner} alt="Keyhole Layout" className="keyhole-background" />
                <div className="nav-buttons">
                    <Link to="/info"><img src={infoButton} alt="Info" /></Link>
                    <Link to="/home"><img src={keyIcon} alt="Key" /></Link>
                    <Link to="/game"><img src={ARButton} alt="Game" /></Link>
                    <Link to="/about"><img src={SM} alt="About Us" /></Link>
                    <Link to="/merch"><img src={d1Button} alt="Merch" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
