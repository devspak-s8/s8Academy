import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

// Bind modal to app element for accessibility
Modal.setAppElement('#root');

const RegistrationSection = () => {

const navigate = useNavigate();


const handleRedirect = () => {
  navigate('/ProfilePage');
};

  return (
   <section className="bg-indigo-600 py-16 px-6 mb-14 text-center text-white">
      <h2 className="text-5xl font-bold mb-6">
        Join <span className="text-purple-400">10,000+</span> Students Learning Today
      </h2>
      <p className="mb-10 text-lg max-w-xl mx-auto">
        Level up your skills with expert-led courses designed for the future.
      </p>
      <a
        href="#enroll"
        className="inline-block bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105 animate-pulse"
      onClick={handleRedirect} >
        Enroll Now
      </a>
    </section>
  );
};

export default RegistrationSection;

