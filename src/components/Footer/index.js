import React from 'react';

import './styles.css'
import insta from './insty.svg'
import facey from './facey.svg'

const Footer = () => {
    return ( 
        <div class="socialLight">
            <div id="social">
                <a href="/" ><span class="fab fa-facebook"> <img className="footer__icon" src={facey}/></span></a>
                <a target="_blank" href="https://www.instagram.com/zokushatribe/?hl=en"><span class="fab fa-instagram"> <img className="footer__icon" src={insta}/></span></a>
            </div>
        </div>
    );
}
 
export default Footer;