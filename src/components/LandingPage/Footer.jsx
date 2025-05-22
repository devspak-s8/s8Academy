import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-modal';

// Bind modal to app element for accessibility
Modal.setAppElement('#root');

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setModalMessage('Please enter a valid email address.');
      setModalIsOpen(true);
      return;
    }

    setIsSubmitting(true);
    setModalMessage('Subscribing...');
    setModalIsOpen(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      setModalMessage('Subscribed successfully!');
      setIsSubmitting(false);
      setEmail('');
    }, 2000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage('');
  };

  return (
 <footer className="relative z-10 p-12 sm:p-16 md:p-24 lg:p-32 bg-dark-900 sm:bg-none">
  <div className="container mx-auto relative isolate px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Widget: About Academy */}
      <div className="mb-8">
        <h4
          className="text-black text-xl md:text-lg font-bold mb-6 md:mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          About Us
        </h4>
        <p
          className="text-gray-700 max-w-xs"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          S8 Academy is dedicated to providing top-notch education and resources
          to help you achieve your goals. Join us to unlock your potential.
        </p>
      </div>

      {/* Widget: Courses */}
      <div className="mb-8">
        <h4
          className="text-black text-xl md:text-lg font-bold mb-6 md:mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Courses
        </h4>
        <ul className="space-y-4 max-w-xs">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Web Development
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Data Science
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Graphic Design
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Digital Marketing
            </a>
          </li>
        </ul>
      </div>

      {/* Widget: Resources */}
      <div className="mb-8">
        <h4
          className="text-black text-xl md:text-lg font-bold mb-6 md:mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Resources
        </h4>
        <ul className="space-y-4 max-w-xs">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              E-books
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Webinars
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>

      {/* Widget: Newsletter */}
      <div className="mb-8">
        <h4
          className="text-black text-xl md:text-lg font-bold mb-6 md:mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Newsletter
        </h4>
        <p
          className="text-gray-700 mb-6 max-w-xs"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Stay updated with the latest courses and offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-0 max-w-xs">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="w-full sm:w-8/12 bg-gray-200 text-black text-sm py-3 px-5 focus:outline-none placeholder-gray-500"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-600 text-white text-xs font-medium py-3 px-3 sm:-ml-12 hover:bg-purple-500 transition disabled:opacity-50"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-12 md:mt-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
      <p
        className="text-gray-700 text-center lg:text-left mb-6 lg:mb-0 lg:w-2/3"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        Copyright &copy; {new Date().getFullYear()} S8 Academy. All rights reserved.
      </p>
      <div className="flex justify-center lg:justify-end lg:w-1/3 space-x-2">
        <a
          href="#"
          className="bg-gray-200 text-black w-10 h-10 flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="#"
          className="bg-gray-200 text-black w-10 h-10 flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="#"
          className="bg-gray-200 text-black w-10 h-10 flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faDribbble} />
        </a>
        <a
          href="#"
          className="bg-gray-200 text-black w-10 h-10 flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </div>
    </div>

    {/* Modal */}
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <p className="text-lg text-gray-800 mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
          {modalMessage}
        </p>
        {isSubmitting ? (
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
        ) : (
          <button
            onClick={closeModal}
            className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Close
          </button>
        )}
      </div>
    </Modal>
  </div>
</footer>

  );
};

export default FooterSection;