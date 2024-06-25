import React from 'react';
import { ReactTyped } from 'react-typed';
import ME from '../../assets/about3.png';
import CTA from './CTA';
import Social from './HeaderSocial';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Shruti Thakur</h1>
        <h5 className='text-light'>
          <ReactTyped
            strings={[
              'Student',
              'MERN Developer',
              'Aspiring Developer',
              'Web Developer',
              'Software Developer'
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h5>
        <CTA />
        <Social />

        <div className='me'>
          <img src={ME} alt='' />
        </div>

        <a href='#contact' className='scroll_down'>----------</a>
      </div>
    </header>
  );
}

export default Header;
