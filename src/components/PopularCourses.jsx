import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import p1 from '../assets/img/popular-course/p1.jpg';
import p2 from '../assets/img/popular-course/1000281686.jpg';
import p3 from '../assets/img/popular-course/p2.jpg';
import p4 from '../assets/img/popular-course/1000280167.jpg';
import p5 from '../assets/img/popular-course/1000281629.jpg';
import p6 from '../assets/img/popular-course/p4.jpg';

import { Link } from 'react-router-dom';
// Hardcoded course data
const courses = [
  {
    id: 1,
    image: p1, // Replace with your image or placeholder

    category: 'Web Development',
    price: '$150',
    title: 'Master Front-End Development with React JS',
    rating: 5,
    reviews: 45,
    description: 'Become a React JS expert and build modern, scalable web applications. This course covers everything from state management to hooks and routing, with hands-on projects to strengthen your skills.'
  
  },
  {
    id: 2,
    image: p2,
    category: 'Programming Language',
    price: '$150',
    title: 'Master JavaScript for Full-Stack Development',
    rating: 5,
    reviews: 30,
    description: 'Learn JavaScript deeply and take your skills to the next level. This course includes both front-end and back-end development, helping you build complete, scalable web applications.'
  
  },
  {
    id: 3,
    image: p3,
    category: 'React & Frontend',
    price: '$180',
    title: 'Advanced React - Hooks, Context, and Redux',
    rating: 5,
    reviews: 60,
    description: 'Master React with in-depth lessons on hooks, context API, and Redux for advanced state management. Perfect for developers looking to build large-scale React applications with complex state logic.'
  },
  {
    id: 4,
    image: p4,
    category: 'Web Development',
    price: '$200',
    title: 'UI/UX Design Mastery for Developers',
    rating: 4,
    reviews: 40,
    description: 'This course is designed for developers who want to understand and implement design principles in their applications. Learn about wireframing, prototyping, and how to create user-friendly interfaces.'
  },{
    id: 5,
    image: p5,
    category: 'Backend Development',
    price: '$170',
    title: 'Node.js & Express for Backend Development',
    rating: 5,
    reviews: 50,
    description: 'Learn how to build scalable back-end systems using Node.js and Express. This course focuses on RESTful APIs, database integration, and securing your applications.'
  },
  {
    id: 6,
    image: p6,
    category: 'Full-Stack Development',
    price: '$250',
    title: 'Complete Full-Stack Development with MERN',
    rating: 5,
    reviews: 75,
    description: 'A comprehensive course for aspiring full-stack developers. Learn how to build dynamic web applications using MongoDB, Express, React, and Node.js. Perfect for building real-world projects.'
  },
];
const PopularCoursesSection = () => {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-32 p-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Courses <br /> Available Right Now
          </h2>
          <p className="text-lg text-gray-600 max-w-xl text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Course Image */}
                <div className="w-full">
                  <img src={course.image} alt={course.title} className="w-full h-30 object-cover" />
                </div>
                {/* Course Details */}
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <p className="text-sm text-blue-600 font-light">{course.category}</p>
                    <p className="text-sm text-gray-800 font-semibold">{course.price}</p>
                  </div>
                  <a href="#" className="block">
                    <h4 className="text-xl font-light text-gray-800 hover:text-blue-600 transition">
                      {course.title}

                      <Link to="/courseDetails">
                      
                      </Link>
                    </h4>
                  </a>
                  <div className="flex items-center mt-4">
                    <ul className="flex space-x-1">
                      {[...Array(course.rating)].map((_, i) => (
                        <li key={i}>
                          <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                        </li>
                      ))}
                    </ul>
                    <p className="ml-4 text-sm text-gray-600">{course.reviews} Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default PopularCoursesSection;

