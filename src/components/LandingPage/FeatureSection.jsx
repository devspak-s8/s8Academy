import React from 'react';
import {
  FaKey,
  FaFileAlt,
  FaMedal,
  FaBriefcase,
  FaCrown,
  FaHeadphonesAlt
} from 'react-icons/fa';

const features = [
  {
    icon: <FaKey className="text-4xl text-gray-800 transition-colors duration-300 group-hover:text-purple-600" />,
    title: 'Lifetime Access',
    description: 'Get unlimited access to all learning resources, anytime — your journey doesn’t expire.',
  },
  {
    icon: <FaFileAlt className="text-4xl text-gray-800 transition-colors duration-300 group-hover:text-purple-600" />,
    title: 'Project Resources',
    description: 'Downloadable files, templates, and real-world projects to sharpen your skills hands-on.',
  },
  {
    icon: <FaMedal className="text-4xl text-gray-800 transition-colors duration-300 group-hover:text-purple-600" />,
    title: 'Verified Certificates',
    description: 'Earn certificates recognized by tech recruiters and startups — boost your credibility.',
  },
  {
    icon: <FaBriefcase className="text-4xl text-gray-800 transition-colors duration-300 group-hover:text-purple-600" />,
    title: 'Career-Focused Content',
    description: 'Courses tailored for job-readiness, freelancing, and launching your own tech startup.',
  },
  {
    icon: <FaCrown className="text-4xl text-gray-800 transition-colors duration-300 group-hover:text-purple-600" />,
    title: 'Mentorship Access',
    description: 'Connect with industry experts and get one-on-one feedback on your progress.',
  },
  {
    icon: <FaHeadphonesAlt className="text-4xl text-gray-800 transition-colors duration-300 group-hover:text-purple-600" />,
    title: 'Real-time Support',
    description: 'Join live Q&A sessions, bootcamps, and community chats — help is always nearby.',
  },
  
];

const FeatureSection = () => {
  return (
    <section className="py-24 p-44 pt-[100px] lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Section Title */}
          <div className="w-full lg:w-12/12 mb-12 text-left">
            <h2 className="text-3xl text-gray-600 md:text-4xl font-bold leading-tight">
              Features That <br /> Can Avail By Everyone
            </h2>
            <p className="mt-4 text-gray-600 max-w-xs">
              If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You
              may see some for as low as $.17 each.
            </p>
          </div>

          {/* Feature Items */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`w-full md:w-6/12 lg:w-4/12 px-[30px] mb-8 ${
                index === 1 || index === 4 ? 'lg:mt-[-160px]' : index === 2 || index === 5 ? 'lg:mt-[-260px]' : ''
              }`}
            >
              <div
                className="group p-8 md:p-10 bg-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                {feature.icon}
                <h4 className="mt-8 text-lg font-semibold text-gray-600">{feature.title}</h4>
                <p className="mt-5 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;