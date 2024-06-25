import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_logo'>
        <a href='#' className='footer_logo_link'>Shruti Thakur</a>
        <div className='social_icons'>
          <a href='https://www.linkedin.com/in/shrutithakur20/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
          <a href='https://github.com/yourusername' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
        </div>
      </div>

      <ul className='footer_links'>
        <li><a href='#' className='footer_link'>Home</a></li>
        <li><a href='#about' className='footer_link'>About</a></li>
        <li><a href='#experience' className='footer_link'>Experience</a></li>
        <li><a href='#protfolio' className='footer_link'>Project</a></li>
        <li><a href='#skills' className='footer_link'>Skills</a></li>
        <li><a href='#contact' className='footer_link'>Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer;
