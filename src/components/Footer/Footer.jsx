import React from 'react';
import './Footer.css'
import Github from '../../media-files/github.png'
import Instagram from '../../media-files/instagram.png'
import Linkedin from '../../media-files/linkedin.png'
import Logo from '../../media-files/logo.png'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr/>
            <div className='footer'>
                <div className="social-links">
                    <img src={Github} alt=""/>
                    <img src={Instagram} alt=""/>
                    <img src={Linkedin} alt=""/>
                </div>
                <div className="logo-f">
                    <img src={Logo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;