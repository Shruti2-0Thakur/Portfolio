import React, { useState } from 'react';
import RESUME from '../../assets/Shruti_CV96';
import Modal from './Modal';

const CTA = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="cta">
      <button onClick={openModal} className="btn">View Resume</button>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
      <Modal show={showModal} onClose={closeModal}>
        <iframe
          src={RESUME}
          style={{ width: '100%', height: '80vh' }}
          title="Resume"
        />
      </Modal>
    </div>
  );
};

export default CTA;
