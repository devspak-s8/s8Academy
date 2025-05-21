import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import vidImg from '../../assets/img/video-area-bg.png';
import vidImg1 from '../../assets/img/video-img.jpg';
// Bind modal to app element for accessibility
Modal.setAppElement('#root');

// Hardcoded video data
const videos = [
  {
    id: 1,
    thumbnail: vidImg1, // Replace with your image or placeholder
    youtubeUrl: 'https://www.youtube.com/embed/VufDd-QL1c0',
    title: 'Learn Angular JS Course for Legendary Persons',
    description:
      'In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.',
  },
  {
    id: 2,
    thumbnail: vidImg1,
    youtubeUrl: 'https://www.youtube.com/embed/VufDd-QL1c0',
    title: 'Learn Angular JS Course for Legendary Persons',
    description:
      'In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.',
  },
];

const VideoSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openModal = (youtubeUrl) => {
    setCurrentVideo(youtubeUrl);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideo('');
  };

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots) => (
      <div style={{ position: 'relative', bottom: '-100px' }}>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100"></div>,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false, // Hide dots on mobile as per original CSS
        },
      },
    ],
  };

  return (
<section
  className="relative z-20 mb-[160px] bg-cover bg-center lg:bg-transparent bg-purple-700 sm:bg-none"
  style={{
    backgroundImage: `url(${vidImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '600px', // force height so centering works
  }}
>
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
      {/* Text Column */}
      <div className="w-full lg:w-5/12 flex items-center">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Watch Our Trainers <br /> in Live Action
          </h2>
          <p className="text-lg">
            If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You
            may see some for as low as $.17 each.
          </p>
        </div>
      </div>

      {/* Video/Form Column */}
      <div className="w-full lg:w-4/12 lg:ml-auto mt-12 lg:mt-0">
            <Slider {...settings}>
              {videos.map((video) => (
                <div key={video.id} className="px-4">
                  <div className="video-part relative">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-auto max-w-full rounded-lg" />
                    <div className="absolute inset-0  bg-opacity-30"></div>
                    <button
                      onClick={() => openModal(video.youtubeUrl)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faPlayCircle} className="text-white text-6xl hover:text-blue-400 transition" />
                    </button>
                  </div>
                  <h4 className="text-white text-xl font-semibold mt-6 mb-4">{video.title}</h4>
                  <p className="text-white text-base">{video.description}</p>
                </div>
              ))}
            </Slider>
          </div>

         </div>
       </div>
 
      {/* Video Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-white rounded-lg w-full max-w-3xl relative">
          <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={currentVideo}
              title="Course Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Modal>

     </section>
  );
};

export default VideoSection;