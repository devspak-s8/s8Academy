'use client'

import React from 'react'

export default function CourseDetail() {
  const courseList = [
    'Introduction Lesson',
    'Basics of HTML',
    'Getting Know about HTML',
    'Tags and Attributes',
    'Basics of CSS',
    'Getting Familiar with CSS',
    'Introduction to Bootstrap',
    'Responsive Design',
    'Canvas in HTML 5',
  ]

  const courseInfo = [
    { label: 'Trainer’s Name', value: 'George Mathews' },
    { label: 'Course Fee', value: '$230' },
    { label: 'Available Seats', value: '15' },
    { label: 'Schedule', value: '2.00 pm to 4.00 pm' },
  ]

  const reviews = [
    { name: 'Emilly Blunt', image: 'img/blog/c1.jpg', rating: 3, comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { name: 'Elsie Cunningham', image: 'img/blog/c2.jpg', rating: 3, comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { name: 'Maria Luna', image: 'img/blog/c3.jpg', rating: 3, comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            <div className="mb-10">
              <img src="img/courses/course-details.jpg" alt="Course" className="w-full h-auto rounded-lg" />
            </div>
            <div className="space-y-10">
              {/* Objectives */}
              <div>
                <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-16 after:bg-purple-600">
                  Objectives
                </h4>
                <p className="text-gray-600">
                  When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope.
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
              {/* Eligibility */}
              <div>
                <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-16 after:bg-purple-600">
                  Eligibility
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
              {/* Course Outline */}
              <div>
                <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-16 after:bg-purple-600">
                  Course Outline
                </h4>
                <ul className="space-y-4">
                  {courseList.map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <p className="text-gray-700">{item}</p>
                      <a
                        href="#"
                        className="bg-gray-100 text-gray-500 text-xs uppercase font-medium px-4 py-2 rounded hover:bg-purple-600 hover:text-white hover:shadow-lg transition-all"
                      >
                        View Details
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3">
            <ul className="space-y-2 mb-6">
              {courseInfo.map((info, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <p className="text-gray-500">{info.label}</p>
                  <span className="text-gray-900 font-medium">{info.value}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block w-full text-center bg-purple-600 text-white text-sm uppercase font-medium py-3 rounded hover:bg-purple-700 hover:shadow-lg transition-all"
            >
              Enroll the course
            </a>

            {/* Reviews */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-16 after:bg-purple-600">
                Reviews
              </h4>
              <div className="space-y-6">
                {/* Rating Section */}
                <div>
                  <h6 className="text-base font-semibold mb-3">Provide Your Rating</h6>
                  {['Quality', 'Punctuality', 'Quality'].map((category, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">{category}</span>
                      <div className="flex space-x-1">
                        {[1, 2, 3].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        {[4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">Outstanding</span>
                    </div>
                  ))}
                </div>
                {/* Feedback */}
                <div>
                  <h6 className="text-base font-semibold mb-3">Your Feedback</h6>
                  <textarea
                    name="feedback"
                    className="w-full h-32 bg-gray-50 p-4 rounded resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your feedback..."
                  ></textarea>
                  <div className="text-right mt-4">
                    <a
                      href="#"
                      className="inline-block bg-purple-600 text-white text-sm uppercase font-medium px-6 py-2 rounded hover:bg-purple-700 hover:shadow-lg transition-all"
                    >
                      Submit
                    </a>
                  </div>
                </div>
                {/* Comments */}
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <h5 className="flex items-center space-x-2">
                          <a href="#" className="text-base font-semibold text-gray-900">{review.name}</a>
                          <div className="flex space-x-1">
                            {[1, 2, 3].map((star) => (
                              <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            {[4, 5].map((star) => (
                              <svg key={star} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </h5>
                        <p className="text-gray-600 mt-1">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}