import React from 'react';
import { FaJava } from "react-icons/fa6";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import ME from '../../assets/about2.png';
import './About.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
      <div className='about_me'>
        <div className='about_img'>
          <img src={ME} alt=''></img>
        </div>
      </div>

      <div className='about_content'>
       <div className='about_cards'>
        <article className='about_card'>
          <PiStudentFill className='about_icons'/>
          <h5>Student</h5>
          <small>Birla Institute Of Technology, Mesra</small>
        </article>

        <article className='about_card'>
          <MdOutlineDeveloperMode className='about_icons'/>
          <h5>developer</h5>
          <small>Web Developer</small>
        </article>

        <article className='about_card'>
          <FaJava className='about_icons'/>
          <h5>programmer</h5>
          <small></small>
        </article>

       </div>
       <p>I am a pre-final year Computer Science and Engineering (CSE) undergraduate student, currently pursuing my B.Tech degree. Recently, I've discovered my true passion for programming and have immersed myself in learning Full Stack Development, Data Structures, and Algorithms.I am actively seeking
        opportunities to embark on my professional journey as a fresher, where I can apply and refine my skills to address
        real-world challenges</p>


      <a href='#contact' className='btn btn-primary'>Let`s talk</a>
      </div>
      </div>
    </section>
  )
}

export default About