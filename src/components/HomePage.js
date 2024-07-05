import React from 'react';
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
                    <a href="info.html"><img src={infoButton} alt="Info" /></a>
                    <a href="key.html"><img src={keyIcon} alt="Key" /></a>
                    <a href="AR.html"><img src={ARButton} alt="AR" /></a>
                    <a href="social.html"><img src={SM} alt="Social Media" /></a>
                    <a href="settings.html"><img src={d1Button} alt="Settings" /></a>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
