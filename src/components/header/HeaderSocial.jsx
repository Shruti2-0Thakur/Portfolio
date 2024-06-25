import React from 'react';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href='' target='_blank'><FaLinkedin/></a>
        <a href='' target='_blank'><FaGithub/></a>
        <a href='' target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocial