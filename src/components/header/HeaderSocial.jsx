import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/shrutithakur20/' target='_blank'><FaLinkedin/></a>
        <a href='https://github.com/Shruti2-0Thakur' target='_blank'><FaGithub/></a>
        
    </div>
  )
}

export default HeaderSocial