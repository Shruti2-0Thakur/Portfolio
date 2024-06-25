import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g93xhuw', 'template_vzqay0t', form.current, 'OePBemdSScPjzdcKt')
      .then((result) => {
          alert("Message sent successfully");
          e.target.reset();
      }, (error) => {
          alert("Error! Please try again later.");
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <IoIosMail className='contact_icons'/>
            <h4>Email</h4>
            <h5>shrutithakur9508@gmail.com</h5>
            <a href='mailto:shrutithakur9508@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <FaLinkedin className='contact_icons'/>
            <h4>LinkedIn</h4>
            <h5>linkedin.com/in/shrutithakur20</h5>
            <a href='https://www.linkedin.com/in/shrutithakur20/' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <FaGithub className='contact_icons'/>
            <h4>GitHub</h4>
            <h5>github.com/Shruti2-0Thakur</h5>
            <a href='https://github.com/Shruti2-0Thakur' target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
