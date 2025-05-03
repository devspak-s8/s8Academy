import React, { useState } from 'react';

// Hardcoded course data
const courses = [
  {
    id: 1,
    title: 'Web Development',
    image: '/assets/courses-01.jpg', // Replace with your image or placeholder
    price: '$128',
    description:
      'Did you know that you can visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">TooCSS website</a> for latest listing of HTML templates and a variety of useful templates.<br><br>You just need to go and visit that website right now. IF you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.',
    hours: '36 Hours',
    weeks: '4 Weeks',
    certificates: '3 Certificates',
  },
  {
    id: 2,
    title: 'Creative Graphic Design',
    image: '/assets/courses-02.jpg',
    price: '$156',
    description:
      'You are not allowed to redistribute thirom us.<br><br>There are some unethical people on this world copied and reposted our templates without any permission from us. Their Karma will hit them really hard. Yeah!',
    hours: '48 Hours',
    weeks: '6 Weeks',
    certificates: '1 Certificate',
  },
  {
    id: 3,
    title: 'Web Design',
    image: '/assets/courses-03.jpg',
    price: '$184',
    description:
      'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.<br><br>Kogi VHS freegan bicycle rights try-hard green juice probably haven\'t heard of them cliche la croix af chillwave.',
    hours: '28 Hours',
    weeks: '4 Weeks',
    certificates: '1 Certificate',
  },
  {
    id: 4,
    title: 'WordPress Introduction',
    image: '/assets/courses-04.jpg',
    price: '$76',
    description:
      'Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.<br><br>Kogi VHS freegan bicycle rights try-hard green juice probably haven\'t heard of them cliche la croix af chillwave.',
    hours: '48 Hours',
    weeks: '4 Weeks',
    certificates: '2 Certificates',
  },
];

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="courses" className="relative py-16 px-4">
      {/* Decorative Images */}
      <div
        className="absolute left-12 top-[-140px] w-[291px] h-[231px] bg-no-repeat bg-center z-10 hidden lg:block"
        style={{ backgroundImage: `url('/assets/our-courses-left-dec.png')` }}
      ></div>
      <div
        className="absolute right-12 top-[-140px] w-[291px] h-[231px] bg-no-repeat bg-center z-10 hidden lg:block"
        style={{ backgroundImage: `url('/assets/our-courses-right-dec.png')` }}
      ></div>

      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Section Heading */}
          <div className="text-center mb-12 max-w-2xl">
            <h6 className="text-sm font-bold text-blue-600 uppercase mb-2">Our Courses</h6>
            <h4 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Can <span className="text-blue-600">Learn</span>
            </h4>
            <p className="text-lg text-gray-600 mt-4 px-0 md:px-16">
              You just think about TemplateMo whenever you need free CSS templates for your business website
            </p>
          </div>

          {/* Tabs */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row">
              {/* Menu */}
              <div className="w-full lg:w-3/12 mb-8 lg:mb-0">
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div
                      key={course.id}
                      className={`gradient-border text-center py-4 px-8 cursor-pointer font-black text-xl transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)] ${
                        activeTab === index ? 'gradient-border-active text-purple-900 shadow-sm' : 'text-gray-800'
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <span>{course.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-9/12 lg:pl-24">
                <ul className="relative min-h-[300px] m-0 p-0">
                  {courses.map((course, index) => (
                    <li
                      key={course.id}
                      className={`absolute w-full bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)] ${
                        activeTab === index
                          ? 'opacity-100 translate-x-0 z-10'
                          : 'opacity-0 translate-x-12 pointer-events-none'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row">
                        {/* Left Image */}
                        <div className="relative w-full lg:w-auto">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full lg:w-[300px] h-auto object-cover rounded-tl-2xl rounded-bl-2xl"
                          />
                          <div className="absolute top-5 left-5 w-12 h-12 bg-gradient-to-br from-purple-900 to-gradient-end text-white text-lg font-bold rounded flex items-center justify-center">
                            <h6>{course.price}</h6>
                          </div>
                        </div>
                        {/* Right Content */}
                        <div className="p-10 lg:ml-12 w-full">
                          <h4 className="text-xl font-extrabold text-gray-800 mb-6">{course.title}</h4>
                          <p
                            className="text-xs  text-gray-600 mb-2"
                            dangerouslySetInnerHTML={{ __html: course.description }}
                          />
                          <div className="flex flex-wrap gap-4 mb-5">
                            <span className="text-sm font-semibold text-gray-800 pr-8 border-r-2 border-gray-800">
                              {course.hours}
                            </span>
                            <span className="text-sm font-semibold text-gray-800 pr-8 border-r-2 border-gray-800">
                              {course.weeks}
                            </span>
                            <span className="text-sm font-semibold text-gray-800">{course.certificates}</span>
                          </div>
                          <div className="mt-5">
                            <a
                              href="contact-us.html"
                              className="text-blue-600 font-semibold hover:text-blue-700 transition"
                            >
                              Subscribe Course
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;