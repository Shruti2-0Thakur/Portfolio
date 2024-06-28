import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import Modal from 'react-modal';
import './Experience.css';

// Import certificate images
import al_Ol from './Al_Ol.png';
import Al_logo from './Al_chemist.png';
import B_ol from './B_Ol.png';
import B_star from './B_Star.png';
import B_intern from './B_intern.png';
import Bnsl from './Bnsl.png';
import M_app from './M_app.png';
import M_intern from './M_intern.png';
import MuS from './MuSocial_logo.png';

// Set the root element for the modal
Modal.setAppElement('#root');

const Experience = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const openModal = (certs) => {
    setCertificates(certs);
    setModalIsOpen(true);
    setCurrentCertIndex(0);
  };

  const closeModal = () => setModalIsOpen(false);

  const nextCertificate = () => {
    setCurrentCertIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const experiences = [
    {
      role: 'Full Stack Web Developer Intern',
      company: 'Digital Alchemist Labs',
      logo: Al_logo,
      period: 'Jun 2024 - Aug 2024',
      details: [
        'Reduced website loading time by 50%, enhancing user experience and engagement, while improving the codebase, boosting team productivity by 20%, and project efficiency by 30%. Developed and tested new features, increasing overall site functionality and user satisfaction by 85%.',
      ],
      certificates: [al_Ol],
    },
    {
      role: '.Net Developer Intern',
      company: 'Bharat National Solutions Limited',
      logo: Bnsl,
      period: 'Feb 2024 - May 2024',
      details: [
        'Gained hands-on teamwork experience in .NET, C, and MySQL, achieving 100% proficiency. Acquired practical skills by mastering MySQL’s stored procedures and triggers, contributing to 100% website development. Developed websites with responsive design, user-friendly interfaces, and easy navigation, achieving 98% client satisfaction.',
      ],
      certificates: [B_ol, B_star, B_intern],
    },
    {
      role: 'Web Developer Intern',
      company: 'Musocial Private Limited',
      logo: MuS,
      period: 'May 2023 - Aug 2023',
      details: [
        'Successfully used the MERN Stack to achieve 40% faster project delivery and 30% higher customer satisfaction. Engineered real-time REST API integration and deployment on hosting servers, demonstrating 90% proficiency in server management and API development.',
      ],
      certificates: [M_intern, M_app],
    },
    
  ];

  return (
    <section id='experience'>
      <h5>My Journey So Far</h5>
      <h2>Experience</h2>

      <div className='experience-cards'>
        {experiences.map((exp, index) => (
          <div key={index} className='experience-card'>
            <div className='experience-header'>
              <img src={exp.logo} alt={`${exp.company} logo`} className='company-logo' />
              <div>
                <h3>{exp.role}</h3>
                <span>
                  {exp.company} <br/> {exp.period}
                </span>
              </div>
            </div>
            <ul className='experience-list'>
              {exp.details.map((detail, idx) => (
                <li key={idx}>
                  <GoDotFill className='list-icon' />
                  <p>{detail}</p>
                </li>
              ))}
              <li>
                <GoDotFill className='list-icon' />
                <button className='cert-button' onClick={() => openModal(exp.certificates)}>
                  View Certificates
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Certificates'
        className='Modal'
        overlayClassName='Overlay'
      >
        <button onClick={closeModal} className='close-modal'>
          Close
        </button>
        <div className='certificate-container'>
          {certificates.length > 0 && (
            <img
              src={certificates[currentCertIndex]}
              alt={`Certificate ${currentCertIndex + 1}`}
              className='certificate-img'
            />
          )}
        </div>
        <div className='modal-navigation'>
          <button onClick={prevCertificate} className='nav-button'>
            Previous
          </button>
          <button onClick={nextCertificate} className='nav-button'>
            Next
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Experience;
