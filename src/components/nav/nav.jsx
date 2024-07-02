import React, { useState } from 'react';
import { AiFillMessage } from "react-icons/ai";
import { FaBriefcase, FaFolderOpen, FaHome, FaTools, FaUser } from "react-icons/fa";
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <nav>
        <a href="#" className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBriefcase /></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><FaFolderOpen/></a>
        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><FaTools /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
      </nav>
    </>
  );
}

export default Nav;
