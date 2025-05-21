import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import testimonialImg1 from '../../assets/img/testimonial/t1.jpg';
import testimonialImg2 from '../../assets/img/testimonial/t2.jpg';
import testimonialImg3 from '../../assets/img/testimonial/t1.jpg';
import testimonialImg4 from '../../assets/img/testimonial/t2.jpg';
import quoteimg from '../../assets/img/quote.png';
// Hardcoded testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "S8Academy completely changed the game for me. I went from knowing almost nothing about JavaScript to building full-stack apps confidently within a few weeks. The mentorship and structure are top-notch!",
    author: "Apatira Sulayman",
    title: "Frontend Developer, Andela",
    image: testimonialImg1,
  },
  {
    id: 2,
    quote:
      "This platform gave me more than just tutorials. I built real-world projects, got personalized feedback, and even landed freelance gigs using the skills I learned. S8Avademy is the real deal!",
    author: "Ibrahim Musa",
    title: "Freelance Full-Stack Developer",
    image: testimonialImg2,
  },
  {
    id: 3,
    quote:
      "The JavaScript bootcamp was intense and practical. The projects pushed me beyond tutorials, and now I'm contributing to open-source. I recommend S8Avademy to anyone serious about tech.",
    author: "Chiamaka Okoye",
    title: "Open Source Contributor, FreeCodeCamp",
    image: testimonialImg3,
  },
  {
    id: 4,
    quote:
      "Thanks to S8Academy, I built my first portfolio and started getting responses from recruiters. It’s the best decision I made in my learning journey.",
    author: "Samuel B.",
    title: "Junior Developer, Flutterwave",
    image: testimonialImg4,
  }
];

const TestimonialsSection = () => {
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
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100"></div>,
    prevArrow: (
      <button className="mr-5">
        <svg className="w-6 h-6 text-black  filter brightness-100 invert" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button>
        <svg className="w-6 h-6 text-white filter brightness-0 invert" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    ),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false, // Hide dots on mobile
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <section className="py-16 p-32">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="flex flex-col lg:flex-row items-center">
                {/* Testimonial Text */}
                <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
                  <div className="mb-12">
                    <img src={quoteimg} alt="Quote" className="w-12 h-12" />
                    <div className="mt-10">
                      <p className="text-lg md:text-xl text-gray-600 italic leading-8 mb-12">
                        {testimonial.quote}
                      </p>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.author}</h4>
                    <p className="text-base text-gray-600">{testimonial.title}</p>
                  </div>
                </div>

                {/* Testimonial Image */}
                <div className="w-full lg:w-6/12 lg:pl-8">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;

