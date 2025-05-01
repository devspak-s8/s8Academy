import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

// Hardcoded blog post data
const blogPosts = [
  {
    id: 1,
    image: '/assets/b1.jpg', // Replace with your image or placeholder
    date: '29th, Oct, 2018',
    likes: 121,
    comments: 5,
    title: 'Smart Kitchen Setup',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do.',
  },
  {
    id: 2,
    image: '/assets/b2.jpg',
    date: '29th, Oct, 2018',
    likes: 121,
    comments: 5,
    title: 'Smart Kitchen Setup',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do.',
  },
  {
    id: 3,
    image: '/assets/b3.jpg',
    date: '29th, Oct, 2018',
    likes: 121,
    comments: 5,
    title: 'Smart Kitchen Setup',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do.',
  },
];

const BlogPostSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section Title */}
          <div className="lg:col-span-3">
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Features That <br /> Can Avail By Everyone
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
                exciting to think about setting up your own viewing station.
              </p>
            </div>
          </div>

          {/* Blog Posts */}
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`relative ${index === 1 ? 'lg:-mt-40' : index === 2 ? 'lg:-mt-64' : ''} mb-8 lg:mb-0`}
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Top Text */}
                <div className="absolute -top-8 right-8 bg-gray-400 text-white text-center p-6">
                  <p className="text-xs uppercase">{post.date}</p>
                  <p className="text-xs uppercase">{post.likes} Likes</p>
                  <p className="text-xs uppercase">{post.comments} Comments</p>
                </div>
                {/* Main Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center min-w-[250px] lg:min-w-[210px] lg:max-w-[210px]">
                  <h4 className="text-xl font-semibold text-white mb-4">{post.title}</h4>
                  <p className="text-sm text-white hidden lg:block">{post.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center bg-blue-700 text-white text-sm font-semibold py-2 px-4 hover:bg-blue-600 transition"
                  >
                    View Details
                    <FontAwesomeIcon icon={faLongArrowRight} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostSection;

