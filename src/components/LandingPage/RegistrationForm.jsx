import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

// Bind modal to app element for accessibility
Modal.setAppElement('#root');

const RegistrationSection = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  // });
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modalMessage, setModalMessage] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Basic validation
  //   if (!formData.name || !formData.email || !formData.phone) {
  //     setModalMessage('Please fill out all fields.');
  //     setModalIsOpen(true);
  //     return;
  //   }
  //   if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     setModalMessage('Please enter a valid email address.');
  //     setModalIsOpen(true);
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setModalMessage('Submitting...');
  //   setModalIsOpen(true);

  //   // Simulate form submission (replace with backend call later)
  //   setTimeout(() => {
  //     console.log('Form submitted:', formData);
  //     setModalMessage('Registration submitted successfully!');
  //     setIsSubmitting(false);
  //     setFormData({ name: '', phone: '', email: '' });
  //   }, 2000);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setModalMessage('');
  // };
const navigate = useNavigate();


const handleRedirect = () => {
  navigate('/ProfilePage');
};

  return (
    <section
      className="relative z-20 mb-[160px] bg-cover bg-center  py-40 md:py-16 lg:bg-transparent sm:bg-none"
     >
      <div className="container mx-auto px-20">
        <div className="flex flex-col lg:flex-row items-end">
          {/* Text Column */}
          <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
            <div className="text-gray-400">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Watch Our Trainers <br /> in Live Action
              </h2>
              <p className="text-lg">
                If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You
                may see some for as low as $.17 each.
              </p>
            </div>
          </div>

          {/* Form Column */}
                <div className="w-full lg:w-4/12 lg:ml-auto mt-12 lg:mt-0">
                <div className="bg-transparent text-center p-8 sm:p-16 shadow-[0_0_50px_rgba(185,55,223,0.45)]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Courses for Free</h3>
                  <p className="text-base text-gray-700 mb-6">It is high time for learning</p>
                  <form  className="space-y-6">
                  <div>
            <input
            type="text"
            name="name"
            placeholder="NAME"
            className="w-full bg-transparent border-b border-gray-400 text-gray-800 text-sm py-5 px-0 placeholder-gray-600 placeholder-opacity-40 uppercase opacity-60 cursor-not-allowed"
            />
          </div>
          <div>
            <input
            type="text"
            name="phone"
            placeholder="PHONE NUMBER"
            className="w-full bg-transparent border-b border-gray-400 text-gray-800 text-sm py-5 px-0 placeholder-gray-600 placeholder-opacity-40 uppercase opacity-60 cursor-not-allowed"
            />
          </div>
          <div>
            <input
            type="email"
            name="email"
            placeholder="EMAIL ADDRESS"
            disabled
            className="w-full bg-transparent border-b border-gray-400 text-gray-800 text-sm py-5 px-0 placeholder-gray-600 placeholder-opacity-40 uppercase opacity-60 cursor-not-allowed"
            />
          </div>

          <div className="text-center mt-6">
            <button
            type="button"
            // onClick={handleGoogleSignIn}
              onClick={handleRedirect}

            className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-md shadow-lg flex items-center justify-center gap-3 mx-auto hover:bg-gray-100 transition"
            >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
              
            />
            Continue with Google
            </button>
          </div>

                  </form>
                </div>
                </div>
              </div>
              </div>

              {/* Modal */}
      {/* <Modal
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
      </Modal> */}
    </section>
  );
};

export default RegistrationSection;

