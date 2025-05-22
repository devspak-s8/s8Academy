import React from 'react';
import { FaBook, FaTrophy, FaDesktop } from 'react-icons/fa';
const features = [
  { icon: FaBook, title: 'New Classes', desc: 'Project-Based Learning: Hands-on training with real-life projects that build portfolio-ready skills.' },
  { icon: FaTrophy, title: 'Top Courses', desc: 'Mentorship & Career Support: Access to expert guidance, peer reviews, and career development tools.' },
  { icon: FaDesktop, title: 'Full E-Books', desc: 'Flexible & Accessible Learning: Self-paced courses and live sessions.' },
];

const Features = () => {
  return (<section className="feature-area mt-20 lg:mt-20 xl:mt-20 bg-white">
  <div className="container-fluid pl-[15px] lg:pl-[190px] 2xl:max-w-[1140px] 2xl:pl-0">
    <div className="flex flex-wrap">  {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <div
                key={idx}
                className="feature-item w-full md:w-1/2 lg:w-1/6 2xl:flex-none 2xl:w-[22.666667%] px-4 mb-[30px] border-r border-[#828bb233] pr-[20px] flex flex-col items-start"
              >
                <div className="text-[30px] text-[#000] mb-3">
                  <Icon />
                </div>
                <h4 className="text-[18px] mb-[20px] font-semibold">{f.title}</h4>
                <p className="mb-0 text-sm text-gray-700">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
