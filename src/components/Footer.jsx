import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-modal';

import ftImg from '../assets/img/footer-bg.png';
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
    <footer
    className="relative z-10 pt-20 px-20 bg-dark-900 sm:bg-none"
    style={{
            backgroundImage: `url(${ftImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}   >
      <div className="container mx-auto relative isolate">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Widget: Top Products */}
          <div className="mb-8">
            <h4 className="text-white text-xl md:text-lg font-bold mb-8 md:mb-4">Top Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Managed Website</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Manage Reputation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Power Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Marketing Service</a></li>
            </ul>
          </div>
          {/* Widget: Quick Links */}
          <div className="mb-8">
            <h4 className="text-white text-xl md:text-lg font-bold mb-8 md:mb-4">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Brand Assets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Investor Relations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          {/* Widget: Features */}
          <div className="mb-8">
            <h4 className="text-white text-xl md:text-lg font-bold mb-8 md:mb-4">Features</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Brand Assets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Investor Relations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          {/* Widget: Resources */}
          <div className="mb-8">
            <h4 className="text-white text-xl md:text-lg font-bold mb-8 md:mb-4">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Experts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Agencies</a></li>
            </ul>
          </div>
          {/* Widget: Newsletter */}
          <div className="mb-8">
            <h4 className="text-white text-xl md:text-lg font-bold mb-8 md:mb-4">Newsletter</h4>
            <p className="text-white mb-6">You can trust us. We only send promo offers.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-8/12 bg-gray-900 text-white text-sm py-3 px-5 focus:outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-700 text-white text-xs font-medium py-3 px-3 -ml-12 hover:bg-blue-600 transition disabled:opacity-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 md:mt-6 flex flex-col lg:flex-row items-center">
          <p className="text-white text-center lg:text-left mb-6 lg:mb-0 lg:w-2/3">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <FontAwesomeIcon icon={faHeart} className="text-purple-900" /> by{' '}
            <a href="https://colorlib.com" target="_blank" className="text-purple-900 font-bold">
              Colorlib
            </a>
          </p>
          <div className="flex justify-center lg:justify-end lg:w-1/3 space-x-2">
            <a href="#" className="bg-gray-900 text-white w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="bg-gray-900 text-white w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="bg-gray-900 text-white w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a href="#" className="bg-gray-900 text-white w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition">
              <FontAwesomeIcon icon={faBehance} />
            </a>
          </div>
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
          <p className="text-lg text-gray-800 mb-4">{modalMessage}</p>
          {isSubmitting ? (
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
          ) : (
            <button
              onClick={closeModal}
              className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          )}
        </div>
      </Modal>
    </footer>
  );
};

export default FooterSection;